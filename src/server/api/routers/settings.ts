import { z } from "zod";
import { createTRPCRouter, protectedProcedure } from "~/server/api/trpc";
import { auth } from "~/server/better-auth/config";

export const settingsRouter = createTRPCRouter({
  getProfile: protectedProcedure.query(async ({ ctx }) => {
    return ctx.db.user.findUnique({
      where: { id: ctx.session.user.id },
      select: { name: true, email: true, role: true, gateId: true },
    });
  }),

  getDistinctGateIds: protectedProcedure.query(async ({ ctx }) => {
    const distinctGates = await ctx.db.busImage.findMany({
      where: { gateId: { not: null } },
      distinct: ["gateId"],
      select: { gateId: true },
      orderBy: { gateId: "asc" },
    });
    return distinctGates.map((g) => g.gateId!);
  }),

  // // Using protectedProcedure because Monitors are also allowed to hit this
  // createUser: protectedProcedure
  //   .input(
  //     z.object({
  //       name: z.string(),
  //       email: z.string().email(),
  //       password: z.string().min(8),
  //       role: z.enum(["ADMIN", "MONITOR", "MANAGER"]),
  //       gateId: z.string().optional(),
  //     }),
  //   )
  //   .mutation(async ({ ctx, input }) => {
  //     const caller = await ctx.db.user.findUnique({
  //       where: { id: ctx.session.user.id },
  //     });

  //     // Strict Security Enforcements
  //     if (!caller || caller.role === "MANAGER") {
  //       throw new Error("Managers are not authorized to create accounts.");
  //     }
  //     if (caller.role === "MONITOR" && input.role === "ADMIN") {
  //       throw new Error(
  //         "Monitors are not authorized to create Admin accounts.",
  //       );
  //     }
  //     if (input.role === "MANAGER" && !input.gateId) {
  //       throw new Error(
  //         "Managers must be assigned to a specific Depot (Gate ID).",
  //       );
  //     }

  //     return await auth.api.signUpEmail({
  //       headers: new Headers(),
  //       body: {
  //         email: input.email,
  //         password: input.password,
  //         name: input.name,
  //         role: input.role,
  //         gateId: input.role === "MANAGER" ? input.gateId : undefined,
  //       },
  //     });
  //   }),

  createUser: protectedProcedure
    .input(
      z.object({
        name: z.string(),
        email: z.string().email(),
        password: z.string().min(8),
        role: z.enum(["ADMIN", "MONITOR", "MANAGER"]),
        gateId: z.string().optional(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const caller = await ctx.db.user.findUnique({
        where: { id: ctx.session.user.id },
      });

      if (!caller) throw new Error("User not found.");

      // Strict Security Enforcements added on 10 oct
      if (caller.role === "MANAGER" && input.role !== "MANAGER") {
        throw new Error(
          "Managers are only authorized to create other Manager accounts.",
        );
      }
      if (caller.role === "MONITOR" && input.role === "ADMIN") {
        throw new Error(
          "Monitors are not authorized to create Admin accounts.",
        );
      }
      if (input.role === "MANAGER" && !input.gateId) {
        throw new Error(
          "Managers must be assigned to a specific Depot (Gate ID).",
        );
      }

      return await auth.api.signUpEmail({
        headers: new Headers(),
        body: {
          email: input.email,
          password: input.password,
          name: input.name,
          role: input.role,
          gateId: input.role === "MANAGER" ? input.gateId : undefined,
        },
      });
    }),

  updateProfile: protectedProcedure
    .input(
      z.object({
        name: z.string().min(1),
        email: z.string().email(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      return ctx.db.user.update({
        where: { id: ctx.session.user.id },
        data: { name: input.name, email: input.email },
      });
    }),

  getInferenceTime: protectedProcedure.query(async ({ ctx }) => {
    const config = await ctx.db.inferenceTime.findFirst();
    if (!config) return null;
    return {
      beginTime: config.beginTime.toISOString().substring(11, 16),
      endTime: config.endTime.toISOString().substring(11, 16),
    };
  }),

  updateInferenceTime: protectedProcedure
    .input(z.object({ beginTime: z.string(), endTime: z.string() }))
    .mutation(async ({ ctx, input }) => {
      const caller = await ctx.db.user.findUnique({
        where: { id: ctx.session.user.id },
      });
      if (caller?.role !== "ADMIN")
        throw new Error("Only Admins can change global settings.");

      const beginDate = new Date(`1970-01-01T${input.beginTime}:00Z`);
      const endDate = new Date(`1970-01-01T${input.endTime}:00Z`);

      const existing = await ctx.db.inferenceTime.findFirst();
      if (existing) {
        return ctx.db.inferenceTime.update({
          where: { id: existing.id },
          data: { beginTime: beginDate, endTime: endDate },
        });
      }
      return ctx.db.inferenceTime.create({
        data: { beginTime: beginDate, endTime: endDate },
      });
    }),
});

// import { z } from "zod";
// import { createTRPCRouter, protectedProcedure } from "~/server/api/trpc";
// import { auth } from "~/server/better-auth/config"; // Adjust path to your better-auth config

// export const settingsRouter = createTRPCRouter({
//   getProfile: protectedProcedure.query(async ({ ctx }) => {
//     return ctx.db.user.findUnique({
//       where: { id: ctx.session.user.id },
//       select: { name: true, email: true, role: true, gateId: true },
//     });
//   }),

//   getDistinctGateIds: protectedProcedure.query(async ({ ctx }) => {
//     const distinctGates = await ctx.db.busImage.findMany({
//       where: { gateId: { not: null } },
//       distinct: ["gateId"],
//       select: { gateId: true },
//       orderBy: { gateId: "asc" },
//     });
//     return distinctGates.map((g) => g.gateId!);
//   }),

//   // RBAC for creating users
//   createUser: protectedProcedure
//     .input(
//       z.object({
//         name: z.string(),
//         email: z.string().email(),
//         password: z.string().min(8),
//         role: z.enum(["ADMIN", "MONITOR", "MANAGER"]),
//         gateId: z.string().optional(),
//       }),
//     )
//     .mutation(async ({ ctx, input }) => {
//       const caller = await ctx.db.user.findUnique({
//         where: { id: ctx.session.user.id },
//       });

//       if (caller?.role === "MANAGER") {
//         throw new Error("Managers are not authorized to create accounts.");
//       }
//       if (caller?.role === "MONITOR" && input.role === "ADMIN") {
//         throw new Error("Monitors cannot create Admin accounts.");
//       }
//       if (input.role === "MANAGER" && !input.gateId) {
//         throw new Error(
//           "Managers must be assigned to a specific Depot (Gate ID).",
//         );
//       }

//       return await auth.api.signUpEmail({
//         headers: new Headers(),
//         body: {
//           email: input.email,
//           password: input.password,
//           name: input.name,
//           role: input.role,
//           gateId: input.role === "MANAGER" ? input.gateId : undefined,
//         },
//       });
//     }),

//   updateProfile: protectedProcedure
//     .input(
//       z.object({
//         name: z.string().min(1),
//         email: z.string().email(),
//       }),
//     )
//     .mutation(async ({ ctx, input }) => {
//       return ctx.db.user.update({
//         where: { id: ctx.session.user.id },
//         data: { name: input.name, email: input.email },
//       });
//     }),

//   getInferenceTime: protectedProcedure.query(async ({ ctx }) => {
//     const config = await ctx.db.inferenceTime.findFirst();
//     if (!config) return null;
//     return {
//       beginTime: config.beginTime.toISOString().substring(11, 16),
//       endTime: config.endTime.toISOString().substring(11, 16),
//     };
//   }),

//   updateInferenceTime: protectedProcedure
//     .input(z.object({ beginTime: z.string(), endTime: z.string() }))
//     .mutation(async ({ ctx, input }) => {
//       const caller = await ctx.db.user.findUnique({
//         where: { id: ctx.session.user.id },
//       });
//       if (caller?.role !== "ADMIN")
//         throw new Error("Only Admins can change global settings.");

//       const beginDate = new Date(`1970-01-01T${input.beginTime}:00Z`);
//       const endDate = new Date(`1970-01-01T${input.endTime}:00Z`);

//       const existing = await ctx.db.inferenceTime.findFirst();
//       if (existing) {
//         return ctx.db.inferenceTime.update({
//           where: { id: existing.id },
//           data: { beginTime: beginDate, endTime: endDate },
//         });
//       }
//       return ctx.db.inferenceTime.create({
//         data: { beginTime: beginDate, endTime: endDate },
//       });
//     }),
// });
