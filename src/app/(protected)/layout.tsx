// import { redirect } from "next/navigation";
// import { headers } from "next/headers";
// import { getSession } from "~/server/better-auth/server";
// import { auth } from "~/server/better-auth";
// import { NavLinks } from "./_components/NavLinks";
// import { TopNavigation } from "./_components/TopNavigation";

// export default async function ProtectedLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   // 1. Check session ONCE for all protected routes
//   const session = await getSession();

//   if (!session) {
//     redirect("/");
//   }

//   return (
//     // <div className="min-h-screen bg-gray-50">
//     //   <nav className="sticky top-0 z-40 flex items-center justify-between border-b bg-white px-6 py-4 shadow-sm">
//     //     <div className="flex items-center gap-6">
//     //       <h1 className="text-xl font-bold text-gray-800">Cerberus QA</h1>
//     //       <div className="flex gap-4 border-l border-gray-200 pl-6">
//     //         <NavLinks />
//     //       </div>
//     //     </div>

//     //     <div className="flex items-center gap-4">
//     //       <span className="text-sm text-gray-600">
//     //         Logged in as <strong>{session.user.name}</strong>
//     //       </span>
//     //       <form>
//     //         <button
//     //           className="rounded-md bg-red-50 px-4 py-2 text-sm font-medium text-red-600 transition hover:bg-red-100"
//     //           formAction={async () => {
//     //             "use server";
//     //             await auth.api.signOut({
//     //               headers: await headers(),
//     //             });
//     //             redirect("/");
//     //           }}
//     //         >
//     //           Sign out
//     //         </button>
//     //       </form>
//     //     </div>
//     //   </nav>

//     //   {children}
//     // </div>

//     // Restored your sleek stone background and font from the old app
//     <div className="flex min-h-screen flex-col bg-stone-50 font-sans text-stone-900">
//       {/* Sleek Top Navigation & Sidebar Manager */}
//       <TopNavigation user={session.user} />

//       {/* Main Content Area matches your old max-w-7xl spacing perfectly */}
//       {/* <main className="mx-auto w-full max-w-7xl flex-1 p-4 sm:p-8"> */}
//         {children}
//       {/* </main> */}
//     </div>
//   );
// }

import { redirect } from "next/navigation";
import { getSession } from "~/server/better-auth/server";
import { TopNavigation } from "./_components/TopNavigation";

export default async function ProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getSession();

  if (!session) {
    redirect("/");
  }

  // We pass user explicitly. No extra divs or styling here.
  return <TopNavigation user={session.user}>{children}</TopNavigation>;
}
