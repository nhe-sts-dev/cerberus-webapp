import { ModelsClient } from "~/app/_components/ModelsClient";
import { HydrateClient } from "~/trpc/server";

export default async function ModelsPage() {
  return (
    <HydrateClient>
      <main className="max-w-7xl mx-auto p-6 mt-6">
        <ModelsClient />
      </main>
    </HydrateClient>
  );
}


















// import { redirect } from "next/navigation";
// import { headers } from "next/headers";
// import { getSession } from "~/server/better-auth/server";
// import { auth } from "~/server/better-auth";
// import { ModelsClient } from "~/app/_components/ModelsClient";
// import { HydrateClient } from "~/trpc/server";
// import Link from "next/link";

// export default async function ModelsPage() {
//   const session = await getSession();
  
//   if (!session) {
//     redirect("/");
//   }

//   return (
//     <HydrateClient>
//       <div className="min-h-screen bg-gray-50">
//         <nav className="sticky top-0 z-50 bg-white shadow-sm border-b px-6 py-4 flex justify-between items-center">
//           <div className="flex items-center gap-6">
//             <h1 className="text-xl font-bold text-gray-800">Cerberus MLOps</h1>
//             <div className="flex gap-4 border-l pl-6 border-gray-200">
//               <Link href="/dashboard" className="text-sm font-medium text-gray-500 hover:text-gray-900 transition">
//                 Labeling
//               </Link>
//               <Link href="/models" className="text-sm font-medium text-blue-600">
//                 Models
//               </Link>
//             </div>
//           </div>
          
//           <div className="flex items-center gap-4">
//             <span className="text-sm text-gray-600">
//               Logged in as <strong>{session.user.name}</strong>
//             </span>
//             <form>
//               <button
//                 className="text-sm bg-red-50 text-red-600 px-4 py-2 rounded-md hover:bg-red-100 font-medium transition"
//                 formAction={async () => {
//                   "use server";
//                   await auth.api.signOut({ headers: await headers() });
//                   redirect("/");
//                 }}
//               >
//                 Sign out
//               </button>
//             </form>
//           </div>
//         </nav>

//         <main className="max-w-7xl mx-auto p-6 mt-6">
//           <ModelsClient />
//         </main>
//       </div>
//     </HydrateClient>
//   );
// }