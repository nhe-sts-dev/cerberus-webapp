"use client";

import { useRouter } from "next/navigation"; // <-- App Router import
import { useState } from "react";
import { authClient } from "~/server/better-auth/client";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

interface CreateUserModalProps {
  isOpen: boolean;
  // onClose: () => void;
}

export function CreateUserModal({ isOpen
  // , onClose
 }: CreateUserModalProps) {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  if (!isOpen) return null;

  const handleCreateAdmin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    const sanitizedEmail = email.trim().toLowerCase();
    const sanitizedName = name.trim();

    if (!EMAIL_REGEX.test(sanitizedEmail)) {
      setError("Please enter a valid email address.");
      return;
    }

    if (password.length < 8) {
      setError("Password must be at least 8 characters long.");
      return;
    }

    setIsLoading(true);

    try {
      console.log("sanitizedemail: ", sanitizedEmail);
      console.log("password: ", password);
      console.log("sanitizedname: ", sanitizedName);
      const { error: authError } = await authClient.signUp.email({
        email: sanitizedEmail,
        password: password,
        name: sanitizedName,
      });

      if (authError) {
        setError(authError.message ?? "Failed to create account.");
      } else {
        // onClose(); // Close modal on success
        router.push("/dashboard");
        router.refresh(); 
      }
    } catch {
      setError("An unexpected error occurred.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm p-4">
      <div className="w-full max-w-md rounded-lg bg-white p-8 shadow-xl relative">
        {/* Close Button */}
        <button 
          // onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
        >
          ✕
        </button>

        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Create Account</h2>

        <form onSubmit={handleCreateAdmin} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">Full Name</label>
            <input
              type="text"
              required
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Email Address</label>
            <input
              type="email"
              required
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              required
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {error && <p className="text-sm font-medium text-red-600">{error}</p>}

          <button
            type="submit"
            disabled={isLoading}
            className="w-full rounded-md bg-green-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-500 disabled:opacity-70 transition-colors"
          >
            {isLoading ? "Creating..." : "Create Account"}
          </button>
        </form>
      </div>
    </div>
  );
}