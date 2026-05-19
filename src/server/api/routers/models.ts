import { createTRPCRouter, protectedProcedure } from "~/server/api/trpc";

export const modelRouter = createTRPCRouter({
  getAllModels: protectedProcedure.query(async ({ ctx }) => {
    return ctx.db.modelRegistry.findMany({
      orderBy: { updatedAt: "desc" },
      include: {
        dataset: true, // Fetch the dataset name if it was linked
      },
    });
  }),
});