"use client";

import { useState } from "react";
import { UserFormModal, InferenceTimeModal } from "./SettingsModals";

export function SettingsSidebar({
  isOpen,
  onClose,
  role,
}: {
  isOpen: boolean;
  onClose: () => void;
  role: string;
}) {
  const [activeModal, setActiveModal] = useState<
    "NONE" | "ADD_USER" | "EDIT_USER" | "EDIT_TIME"
  >("NONE");

  // Both Admins and Monitors can add users in this app
  // const canAddUser = role === "ADMIN" || role === "MONITOR";
  const isAdmin = role === "ADMIN";
  const canAddUser = role === "ADMIN" || role === "MONITOR";

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-stone-900/40 backdrop-blur-sm transition-opacity"
          onClick={onClose}
        />
      )}

      {/* Sidebar - Now uses native React styles for the transform to bypass Tailwind cache */}
      <aside
        className="fixed top-0 left-0 z-50 h-full w-80 border-r border-stone-200/80 bg-white shadow-2xl transition-transform duration-300"
        style={{ transform: isOpen ? "translateX(0)" : "translateX(-100%)" }}
      >
        <div className="flex h-[72px] items-center justify-between border-b border-stone-200/80 px-6">
          <h2 className="text-lg font-bold text-stone-800">Preferences</h2>
          <button
            onClick={onClose}
            className="p-2 text-stone-400 hover:text-stone-800"
          >
            <svg
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
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

        {/* <nav className="flex flex-col gap-1 p-4">
          {canAddUser && (
            <button
              onClick={() => setActiveModal("ADD_USER")}
              className="group flex items-center gap-3 rounded-xl p-3.5 text-sm font-medium text-stone-600 hover:bg-stone-50 hover:text-stone-900"
            >
              <span>Add New Account</span>
            </button>
          )}
          {isAdmin && (
            <button
              onClick={() => setActiveModal("EDIT_TIME")}
              className="group flex items-center gap-3 rounded-xl p-3.5 text-sm font-medium text-stone-600 hover:bg-stone-50 hover:text-stone-900"
            >
              <span>Edit Inference Window</span>
            </button>
          )}
          <button
            onClick={() => setActiveModal("EDIT_USER")}
            className="group flex items-center gap-3 rounded-xl p-3.5 text-sm font-medium text-stone-600 hover:bg-stone-50 hover:text-stone-900"
          >
            <span>Edit Profile</span>
          </button>
        </nav> */}

        <nav className="flex flex-col gap-1 p-4">
          {canAddUser && (
            <button
              onClick={() => setActiveModal("ADD_USER")}
              className="group flex items-center gap-3 rounded-xl p-3.5 text-sm font-medium text-stone-600 hover:bg-stone-50 hover:text-stone-900"
            >
              <span>Add New Account</span>
            </button>
          )}

          {isAdmin && (
            <button
              onClick={() => setActiveModal("EDIT_TIME")}
              className="group flex items-center gap-3 rounded-xl p-3.5 text-sm font-medium text-stone-600 hover:bg-stone-50 hover:text-stone-900"
            >
              <span>Edit Inference Window</span>
            </button>
          )}
          <button
            onClick={() => setActiveModal("EDIT_USER")}
            className="group flex items-center gap-3 rounded-xl p-3.5 text-sm font-medium text-stone-600 hover:bg-stone-50 hover:text-stone-900"
          >
            <span>Edit Profile</span>
          </button>
        </nav>
      </aside>

      <UserFormModal
        isOpen={activeModal === "ADD_USER"}
        onClose={() => setActiveModal("NONE")}
        isEditMode={false}
      />
      <UserFormModal
        isOpen={activeModal === "EDIT_USER"}
        onClose={() => setActiveModal("NONE")}
        isEditMode={true}
      />
      <InferenceTimeModal
        isOpen={activeModal === "EDIT_TIME"}
        onClose={() => setActiveModal("NONE")}
      />
    </>
  );
}
