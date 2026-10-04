"use client";

import { useState, useEffect } from "react";
import { api } from "~/trpc/react";

export function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  // Queries
  const { data: profile } = api.settings.getProfile.useQuery();
  const { data: inferenceTime } = api.settings.getInferenceTime.useQuery();

  // Form States
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [beginTime, setBeginTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [newUser, setNewUser] = useState({
    name: "",
    email: "",
    password: "",
    role: "MONITOR" as "ADMIN" | "MONITOR" | "MANAGER",
    gateId: "",
  });

  // Populate state when data loads
  useEffect(() => {
    if (profile) {
      setName(profile.name);
      setEmail(profile.email);
    }
  }, [profile]);

  useEffect(() => {
    if (inferenceTime) {
      setBeginTime(inferenceTime.beginTime);
      setEndTime(inferenceTime.endTime);
    }
  }, [inferenceTime]);

  // Mutations
  const updateProfile = api.settings.updateProfile.useMutation({
    onSuccess: () => alert("Profile updated!"),
  });
  const updateTime = api.settings.updateInferenceTime.useMutation({
    onSuccess: () => alert("Inference window updated!"),
  });
  const createUser = api.settings.createUser.useMutation({
    onSuccess: () => {
      alert("User created successfully!");
      setNewUser({
        name: "",
        email: "",
        password: "",
        role: "MONITOR",
        gateId: "",
      });
    },
    onError: (e) => alert(e.message),
  });

  const isManager = profile?.role === "MANAGER";
  const isMonitor = profile?.role === "MONITOR";
  const isAdmin = profile?.role === "ADMIN";

  return (
    <>
      {/* Hamburger Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="-ml-2 rounded-md p-2 text-gray-600 transition hover:bg-gray-100"
      >
        <svg
          className="h-6 w-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-[60] bg-black/40 transition-opacity"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar Drawer */}
      <div
        className={`fixed top-0 left-0 z-[70] h-full w-80 transform overflow-y-auto bg-white shadow-xl transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-6">
          <div className="mb-8 flex items-center justify-between">
            <h2 className="text-xl font-bold text-gray-800">Settings</h2>
            <button
              onClick={() => setIsOpen(false)}
              className="rounded-full p-2 text-gray-500 hover:bg-gray-100"
            >
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* SECTION: My Profile */}
          <div className="mb-8">
            <h3 className="mb-4 text-sm font-bold tracking-wider text-gray-400 uppercase">
              My Profile
            </h3>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                updateProfile.mutate({ name, email });
              }}
              className="flex flex-col gap-3"
            >
              <input
                className="w-full rounded border p-2 text-sm"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                className="w-full rounded border p-2 text-sm"
                placeholder="Email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button
                type="submit"
                disabled={updateProfile.isPending}
                className="rounded bg-blue-600 py-2 text-sm font-medium text-white transition hover:bg-blue-700"
              >
                {updateProfile.isPending ? "Saving..." : "Update Profile"}
              </button>
            </form>
          </div>

          {/* SECTION: Inference Window (Admin Only) */}
          {isAdmin && (
            <div className="mb-8 border-t pt-6">
              <h3 className="mb-4 text-sm font-bold tracking-wider text-gray-400 uppercase">
                Inference Window
              </h3>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  updateTime.mutate({ beginTime, endTime });
                }}
                className="flex flex-col gap-3"
              >
                <div className="flex items-center gap-2">
                  <input
                    type="time"
                    className="w-full rounded border p-2 text-sm"
                    value={beginTime}
                    onChange={(e) => setBeginTime(e.target.value)}
                  />
                  <span className="text-gray-400">to</span>
                  <input
                    type="time"
                    className="w-full rounded border p-2 text-sm"
                    value={endTime}
                    onChange={(e) => setEndTime(e.target.value)}
                  />
                </div>
                <button
                  type="submit"
                  disabled={updateTime.isPending}
                  className="rounded bg-gray-800 py-2 text-sm font-medium text-white transition hover:bg-gray-900"
                >
                  {updateTime.isPending ? "Saving..." : "Update Window"}
                </button>
              </form>
            </div>
          )}

          {/* SECTION: Create User (Admin & Monitor Only) */}
          {(isAdmin || isMonitor) && (
            <div className="mb-8 border-t pt-6">
              <h3 className="mb-4 text-sm font-bold tracking-wider text-gray-400 uppercase">
                Add New User
              </h3>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  createUser.mutate(newUser);
                }}
                className="flex flex-col gap-3"
              >
                <input
                  required
                  className="w-full rounded border p-2 text-sm"
                  placeholder="Full Name"
                  value={newUser.name}
                  onChange={(e) =>
                    setNewUser({ ...newUser, name: e.target.value })
                  }
                />
                <input
                  required
                  type="email"
                  className="w-full rounded border p-2 text-sm"
                  placeholder="Email"
                  value={newUser.email}
                  onChange={(e) =>
                    setNewUser({ ...newUser, email: e.target.value })
                  }
                />
                <input
                  required
                  type="password"
                  className="w-full rounded border p-2 text-sm"
                  placeholder="Temporary Password"
                  value={newUser.password}
                  onChange={(e) =>
                    setNewUser({ ...newUser, password: e.target.value })
                  }
                />
                <select
                  className="w-full rounded border p-2 text-sm"
                  value={newUser.role}
                  onChange={(e) =>
                    setNewUser({ ...newUser, role: e.target.value as any })
                  }
                >
                  {isAdmin && <option value="ADMIN">Admin</option>}
                  <option value="MONITOR">Monitor</option>
                  <option value="MANAGER">Manager</option>
                </select>

                {newUser.role === "MANAGER" && (
                  <input
                    required
                    className="w-full rounded border p-2 text-sm"
                    placeholder="Gate ID (Depot)"
                    value={newUser.gateId}
                    onChange={(e) =>
                      setNewUser({ ...newUser, gateId: e.target.value })
                    }
                  />
                )}

                <button
                  type="submit"
                  disabled={createUser.isPending}
                  className="rounded bg-green-600 py-2 text-sm font-medium text-white transition hover:bg-green-700"
                >
                  {createUser.isPending ? "Creating..." : "Create User"}
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
