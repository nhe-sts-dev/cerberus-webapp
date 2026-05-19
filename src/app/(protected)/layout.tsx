import { redirect } from "next/navigation";
import { headers } from "next/headers";
import { getSession } from "~/server/better-auth/server";
import { auth } from "~/server/better-auth";
import { NavLinks } from "./_components/NavLinks";

export default async function ProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // 1. Check session ONCE for all protected routes
  const session = await getSession();

  if (!session) {
    redirect("/");
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="sticky top-0 z-50 bg-white shadow-sm border-b px-6 py-4 flex justify-between items-center">
        
        {/* LEFT SIDE: Brand & Dynamic Navigation Links */}
        <div className="flex items-center gap-6">
          <h1 className="text-xl font-bold text-gray-800">Cerberus QA</h1>
          <div className="flex gap-4 border-l pl-6 border-gray-200">
            <NavLinks />
          </div>
        </div>

        {/* RIGHT SIDE: User Info & Logout */}
        <div className="flex items-center gap-4">
          <span className="text-sm text-gray-600">
            Logged in as <strong>{session.user.name}</strong>
          </span>
          <form>
            <button
              className="text-sm bg-red-50 text-red-600 px-4 py-2 rounded-md hover:bg-red-100 font-medium transition"
              formAction={async () => {
                "use server";
                await auth.api.signOut({
                  headers: await headers(),
                });
                redirect("/");
              }}
            >
              Sign out
            </button>
          </form>
        </div>
      </nav>

      {/* This is where your individual pages will render */}
      {children}
    </div>
  );
}