import { DashboardClient } from "~/app/_components/DashboardClient";
import { HydrateClient } from "~/trpc/server";

export default async function DashboardPage() {
  return (
    <HydrateClient>
      <main className="max-w-7xl mx-auto p-6 mt-6">
        <DashboardClient />
      </main>
    </HydrateClient>
  );
}





// import { redirect } from "next/navigation";
// import { headers } from "next/headers";
// import { getSession } from "~/server/better-auth/server";
// import { auth } from "~/server/better-auth";
// import { DashboardClient } from "~/app/_components/DashboardClient";
// import { HydrateClient } from "~/trpc/server";

// export default async function DashboardPage() {
//   const session = await getSession();
  
//   if (!session) {
//     redirect("/");
//   }

//   return (
//     <HydrateClient>
//       <div className="min-h-screen bg-gray-50">
//         <nav className="sticky top-0 z-50 bg-white shadow-sm border-b px-6 py-4 flex justify-between items-center">
//           <h1 className="text-xl font-bold text-gray-800">Cerberus Labelling Dashboard</h1>
//                    <div className="flex items-center gap-4">
//            <span className="text-sm text-gray-600">
//              Logged in as <strong>{session.user.name}</strong>
//            </span>
          
//            <form>
//              <button
//                className="text-sm bg-red-50 text-red-600 px-4 py-2 rounded-md hover:bg-red-100 font-medium transition"
//                formAction={async () => {
//                  "use server";
//                 await auth.api.signOut({
//                   headers: await headers(),
//                 });
//                 redirect("/");
//               }}
//             >
//               Sign out
//             </button>
//           </form>
//         </div>
//         </nav>

//         <main className="max-w-7xl mx-auto p-6 mt-6">
//           <DashboardClient />
//         </main>
//       </div>
//     </HydrateClient>
//   );
// }













// // import { redirect } from "next/navigation";
// // import { headers } from "next/headers";
// // import { getSession } from "~/server/better-auth/server";
// // import { auth } from "~/server/better-auth";

// // export default async function DashboardPage() {
// //   // 1. Protect the route: Only logged-in users get past here
// //   const session = await getSession();
  
// //   if (!session) {
// //     redirect("/");
// //   }

// //   return (
// //     <div className="min-h-screen bg-gray-50">
// //       {/* Top Navigation Bar */}
// //       <nav className="bg-white shadow-sm border-b px-6 py-4 flex justify-between items-center">
// //         <h1 className="text-xl font-bold text-gray-800">Cerberus Labelling Dashboard</h1>
        
// //         <div className="flex items-center gap-4">
// //           <span className="text-sm text-gray-600">
// //             Logged in as <strong>{session.user.name}</strong>
// //           </span>
          
// //           <form>
// //             <button
// //               className="text-sm bg-red-50 text-red-600 px-4 py-2 rounded-md hover:bg-red-100 font-medium transition"
// //               formAction={async () => {
// //                 "use server";
// //                 await auth.api.signOut({
// //                   headers: await headers(),
// //                 });
// //                 redirect("/");
// //               }}
// //             >
// //               Sign out
// //             </button>
// //           </form>
// //         </div>
// //       </nav>

// //       {/* Main Content Area */}
// //       <main className="max-w-7xl mx-auto p-6 mt-6">
// //         <div className="mb-8">
// //           <h2 className="text-2xl font-bold text-gray-900">Image Labeling Queue</h2>
// //           <p className="text-gray-600">Select a bus image to assign cleanliness labels.</p>
// //         </div>

// //         {/* Placeholder for your Image Grid */}
// //         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
// //           {/* We will map over database records here later */}
// //           <div className="h-64 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center bg-gray-100 text-gray-400">
// //             Image Card Placeholder
// //           </div>
// //           <div className="h-64 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center bg-gray-100 text-gray-400">
// //             Image Card Placeholder
// //           </div>
// //           <div className="h-64 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center bg-gray-100 text-gray-400">
// //             Image Card Placeholder
// //           </div>
// //         </div>
// //       </main>
// //     </div>
// //   );
// // }