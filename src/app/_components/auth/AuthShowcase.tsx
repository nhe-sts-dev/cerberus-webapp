// "use client";

// import { useState } from "react";
// import { LoginModal } from "./LoginModal";
// import { CreateUserModal } from "./CreateUserModal";

// export function AuthShowcase() {
//   const [isLoginOpen, setIsLoginOpen] = useState(false);
//   const [isCreateOpen, setIsCreateOpen] = useState(false);

//   return (
//     <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
//       <button
//         onClick={() => setIsLoginOpen(true)}
//         className="w-full sm:w-auto rounded-full bg-blue-600 px-10 py-3 font-semibold text-white transition hover:bg-blue-500 shadow-md"
//       >
//         Sign In
//       </button>

//       {/* <button
//         onClick={() => setIsCreateOpen(true)}
//         className="w-full sm:w-auto rounded-full bg-white/10 px-10 py-3 font-semibold text-white transition hover:bg-white/20 border border-white/20"
//       >
//         Create Account
//       </button> */}

//       <LoginModal 
//         isOpen={isLoginOpen} 
//         onClose={() => 
//           setIsLoginOpen(false)
//         } 
//       />
      
//       {/* <CreateUserModal 
//         isOpen={isCreateOpen} 
//         onClose={() => setIsCreateOpen(false)} 
//       /> */}
//     </div>
//   );
// }