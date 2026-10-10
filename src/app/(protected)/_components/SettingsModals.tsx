"use client";

import { useState, useEffect } from "react";
import { api } from "~/trpc/react";
import { authClient } from "~/server/better-auth/client";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  isEditMode?: boolean;
}

// ==========================================
// TIME SELECTION HELPERS
// ==========================================
const availableHours = Array.from({ length: 9 }, (_, i) => i + 9); // Generates 9 to 17

const formatDisplayHour = (hour: number) => {
  if (hour === 12) return "12:00 PM (Noon)";
  const ampm = hour >= 12 ? "PM" : "AM";
  const displayHour = hour > 12 ? hour - 12 : hour;
  return `${displayHour}:00 ${ampm}`;
};

const formatValueHour = (hour: number) => {
  return `${hour.toString().padStart(2, "0")}:00`;
};

// ==========================================
// USER FORM MODAL
// ==========================================
export function UserFormModal({
  isOpen,
  onClose,
  isEditMode = false,
}: ModalProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState<"ADMIN" | "MONITOR" | "MANAGER">("MANAGER");
  const [gateId, setGateId] = useState<string>("");

  const [isChangingPassword, setIsChangingPassword] = useState(false);
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const utils = api.useUtils();

  const { data: profile } = api.settings.getProfile.useQuery(undefined, {
    enabled: isOpen,
  });

  const { data: gateIds, isLoading: isLoadingGates } =
    api.settings.getDistinctGateIds.useQuery(undefined, {
      enabled: isOpen && !isEditMode && role === "MANAGER",
    });

  useEffect(() => {
    if (isEditMode && profile) {
      setName(profile.name ?? "");
      setEmail(profile.email ?? "");
      setRole(profile.role ?? "MANAGER");
      setGateId(profile.gateId ?? "");
      setIsChangingPassword(false);
      setCurrentPassword("");
      setNewPassword("");
    } else if (!isEditMode && isOpen) {
      setName("");
      setEmail("");
      setPassword("");
      setRole("MANAGER");
      setGateId("");
    }
  }, [profile, isEditMode, isOpen]);

  const createUser = api.settings.createUser.useMutation({
    onSuccess: () => {
      onClose();
    },
    onError: (err) => alert(err.message),
  });

  const updateProfile = api.settings.updateProfile.useMutation({
    onSuccess: () => {
      void utils.settings.getProfile.invalidate();
      onClose();
    },
    onError: (err) => alert(err.message),
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (isEditMode) {
      updateProfile.mutate({ name, email });

      if (isChangingPassword && currentPassword && newPassword) {
        const { error } = await authClient.changePassword({
          newPassword: newPassword,
          currentPassword: currentPassword,
          revokeOtherSessions: true,
        });

        if (error) {
          alert(`Password update failed: ${error.message}`);
          return;
        }
      }
    } else {
      if (role === "MANAGER" && !gateId) {
        alert("Please specify a Depot (Gate ID) for the Manager.");
        return;
      }
      createUser.mutate({
        name,
        email,
        password,
        role,
        gateId: role === "MANAGER" ? gateId : undefined,
      });
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-stone-900/60 p-4 backdrop-blur-sm transition-opacity">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
        <h3 className="mb-6 text-xl font-bold text-stone-800">
          {isEditMode ? "Edit Profile" : "Add New User"}
        </h3>
        <form className="space-y-5" onSubmit={handleSubmit}>
          <div>
            <label className="mb-1.5 block text-sm font-medium text-stone-700">
              Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="block w-full rounded-lg border border-stone-300 px-4 py-2.5 text-sm outline-none focus:border-zinc-800 focus:ring-1 focus:ring-zinc-800"
              required
            />
          </div>

          <div>
            <label className="mb-1.5 block text-sm font-medium text-stone-700">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="block w-full rounded-lg border border-stone-300 px-4 py-2.5 text-sm outline-none focus:border-zinc-800 focus:ring-1 focus:ring-zinc-800"
              required
            />
          </div>

          {isEditMode && (
            <div className="rounded-md border border-gray-200 p-4">
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={isChangingPassword}
                  onChange={(e) => setIsChangingPassword(e.target.checked)}
                  className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <span className="text-sm font-medium text-gray-700">
                  Change Password
                </span>
              </label>

              {isChangingPassword && (
                <div className="mt-4 space-y-3">
                  <div>
                    <label className="block text-xs font-medium text-gray-600">
                      Current Password
                    </label>
                    <input
                      type="password"
                      value={currentPassword}
                      onChange={(e) => setCurrentPassword(e.target.value)}
                      className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-sm"
                      required={isChangingPassword}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-600">
                      New Password
                    </label>
                    <input
                      type="password"
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                      className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-sm"
                      required={isChangingPassword}
                    />
                  </div>
                </div>
              )}
            </div>
          )}

          {!isEditMode && (
            <>
              <div>
                <label className="mb-1.5 block text-sm font-medium text-stone-700">
                  Password
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="block w-full rounded-lg border border-stone-300 px-4 py-2.5 text-sm outline-none focus:border-zinc-800 focus:ring-1 focus:ring-zinc-800"
                  required
                />
              </div>

              <div>
                <label className="mb-1.5 block text-sm font-medium text-stone-700">
                  Role
                </label>
                <select
                  value={role}
                  onChange={(e) =>
                    setRole(e.target.value as "ADMIN" | "MONITOR" | "MANAGER")
                  }
                  className="block w-full rounded-lg border border-stone-300 bg-white px-4 py-2.5 text-sm outline-none focus:border-zinc-800 focus:ring-1 focus:ring-zinc-800"
                >
                  {/* Admin gets to see everything */}
                  {profile?.role === "ADMIN" && (
                    <>
                      <option value="ADMIN">Admin</option>
                      <option value="MONITOR">Monitor</option>
                    </>
                  )}
                  <option value="MANAGER">Manager</option>
                </select>
              </div>

              {role === "MANAGER" && (
                <div className="animate-in fade-in slide-in-from-top-2 duration-300">
                  <label className="mb-1.5 block text-sm font-medium text-stone-700">
                    Assign to Depot
                  </label>
                  <select
                    value={gateId}
                    onChange={(e) => setGateId(e.target.value)}
                    className="block w-full rounded-lg border border-stone-300 bg-white px-4 py-2.5 text-sm outline-none focus:border-zinc-800 focus:ring-1 focus:ring-zinc-800"
                    required
                    disabled={isLoadingGates}
                  >
                    <option value="" disabled>
                      {isLoadingGates
                        ? "Loading depots..."
                        : "Select a depot..."}
                    </option>
                    {(gateIds ?? [])
                      .filter(
                        (id): id is string =>
                          typeof id === "string" && id.trim().length > 0,
                      )
                      .map((id) => (
                        <option key={id} value={id}>
                          Depot: {id}
                        </option>
                      ))}
                  </select>
                  <p className="mt-1.5 text-xs text-stone-500">
                    This user will only see buses classified at this specific
                    depot.
                  </p>
                </div>
              )}
            </>
          )}

          <div className="mt-8 flex justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="rounded-lg px-5 py-2.5 text-sm font-medium text-stone-600 transition-colors hover:bg-stone-100"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={createUser.isPending || updateProfile.isPending}
              className="rounded-lg bg-zinc-900 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-zinc-800 disabled:opacity-50"
            >
              {createUser.isPending || updateProfile.isPending
                ? "Saving..."
                : "Save"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

// ==========================================
// INFERENCE TIME MODAL
// ==========================================
export function InferenceTimeModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const [beginTime, setBeginTime] = useState("09:00");
  const [endTime, setEndTime] = useState("17:00");

  const utils = api.useUtils();

  const { data: currentTimes } = api.settings.getInferenceTime.useQuery(
    undefined,
    {
      enabled: isOpen,
    },
  );

  useEffect(() => {
    if (currentTimes) {
      setBeginTime(currentTimes.beginTime);
      setEndTime(currentTimes.endTime);
    } else if (isOpen) {
      setBeginTime("09:00");
      setEndTime("17:00");
    }
  }, [currentTimes, isOpen]);

  const updateTime = api.settings.updateInferenceTime.useMutation({
    onSuccess: () => {
      void utils.settings.getInferenceTime.invalidate();
      onClose();
    },
    onError: (err) => alert(err.message),
  });

  // Handle dynamic range correction
  const handleBeginChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newBegin = e.target.value;
    setBeginTime(newBegin);

    const newBeginHour = parseInt(newBegin.split(":")[0]!, 10);
    const currentEndHour = parseInt(endTime.split(":")[0]!, 10);

    // If the new start time overlaps or exceeds the end time, push the end time forward
    if (currentEndHour <= newBeginHour) {
      setEndTime(formatValueHour(newBeginHour + 1));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const beginHour = parseInt(beginTime.split(":")[0]!, 10);
    const endHour = parseInt(endTime.split(":")[0]!, 10);

    if (endHour <= beginHour) {
      alert("The end time must be strictly later than the start time.");
      return;
    }

    updateTime.mutate({ beginTime, endTime });
  };

  if (!isOpen) return null;

  const currentBeginHourInt = parseInt(beginTime.split(":")[0] ?? "9", 10);

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-stone-900/60 p-4 backdrop-blur-sm transition-opacity">
      <div className="w-full max-w-sm rounded-2xl bg-white p-8 shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
        <h3 className="mb-2 text-xl font-bold text-stone-800">
          Inference Window
        </h3>
        <p className="mb-6 text-xs text-stone-500">
          Define the global daily time window when models are allowed to
          execute.
        </p>

        <form onSubmit={handleSubmit}>
          <div className="mb-8 flex items-center gap-4">
            <div className="flex-1">
              <label className="mb-1.5 block text-xs font-bold tracking-widest text-stone-400 uppercase">
                Start Time
              </label>
              <select
                required
                value={beginTime}
                onChange={handleBeginChange}
                className="block w-full rounded-lg border border-stone-300 bg-white px-3 py-2.5 text-sm transition-all outline-none focus:border-zinc-800 focus:ring-1 focus:ring-zinc-800"
              >
                {availableHours.map((hour) => {
                  // Don't allow starting at 17:00 because end time must be later
                  if (hour === 17) return null;
                  return (
                    <option key={`begin-${hour}`} value={formatValueHour(hour)}>
                      {formatDisplayHour(hour)}
                    </option>
                  );
                })}
              </select>
            </div>

            <div className="flex-1">
              <label className="mb-1.5 block text-xs font-bold tracking-widest text-stone-400 uppercase">
                End Time
              </label>
              <select
                required
                value={endTime}
                onChange={(e) => setEndTime(e.target.value)}
                className="block w-full rounded-lg border border-stone-300 bg-white px-3 py-2.5 text-sm transition-all outline-none focus:border-zinc-800 focus:ring-1 focus:ring-zinc-800"
              >
                {availableHours.map((hour) => {
                  // End time must be strictly greater than start time
                  const isDisabled = hour <= currentBeginHourInt;
                  return (
                    <option
                      key={`end-${hour}`}
                      value={formatValueHour(hour)}
                      disabled={isDisabled}
                      className={
                        isDisabled ? "text-stone-300" : "text-stone-800"
                      }
                    >
                      {formatDisplayHour(hour)}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>

          <div className="flex justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="rounded-lg px-5 py-2.5 text-sm font-medium text-stone-600 transition-colors hover:bg-stone-100"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={updateTime.isPending}
              className="rounded-lg bg-zinc-900 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-zinc-800 disabled:opacity-50"
            >
              {updateTime.isPending ? "Saving..." : "Save Window"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
