"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { authClient } from "~/server/better-auth/client";
import { SettingsSidebar } from "./SettingsSidebar";
import { NavLinks } from "./NavLinks";

type DashboardUser = {
  name?: string;
  role?: string;
};

export function TopNavigation({
  children,
  user,
}: {
  children: React.ReactNode;
  user: DashboardUser;
}) {
  const router = useRouter();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleSignOut = async () => {
    await authClient.signOut();
    router.push("/");
  };

  return (
    <div className="flex min-h-screen flex-col bg-stone-50 font-sans text-stone-900">
      <header className="sticky top-0 z-30 flex h-[72px] items-center justify-between border-b border-stone-200/80 bg-white/80 px-6 shadow-sm backdrop-blur-md">
        <div className="flex items-center gap-5">
          <button
            onClick={() => setIsSidebarOpen(true)}
            className="group rounded-lg p-2 text-stone-400 hover:bg-stone-100 hover:text-stone-800 focus:outline-none"
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

          <span className="text-xl font-bold tracking-tight text-stone-800">
            Cerberus QA
          </span>

          <div className="ml-2 flex gap-4 border-l border-stone-300 pl-6">
            <NavLinks />
          </div>
        </div>

        <div className="flex items-center gap-4">
          {/* Removed hidden sm:block to ensure text always renders */}
          <span className="text-sm font-medium text-stone-500">
            Welcome back, <span className="text-stone-800">{user?.name}</span>
          </span>
          <div className="h-4 w-px bg-stone-200"></div>
          <button
            onClick={handleSignOut}
            className="rounded-lg border border-stone-200 bg-white px-4 py-2 text-xs font-semibold text-stone-600 shadow-sm hover:bg-stone-50 hover:text-zinc-900"
          >
            Sign Out
          </button>
        </div>
      </header>

      <SettingsSidebar
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
        role={user?.role ?? "MANAGER"}
      />

      <main className="mx-auto w-full max-w-7xl flex-1 p-4 sm:p-8">
        {children}
      </main>
    </div>
  );
}
