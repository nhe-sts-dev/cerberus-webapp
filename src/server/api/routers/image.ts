import { z } from "zod";
import { createTRPCRouter, protectedProcedure } from "~/server/api/trpc";

// Define the enums directly in Zod for bulletproof type inference
const zLabelStatus = z.enum(["DIRTY", "CLEAN", "UNCERTAIN", "UNLABELED"]);
const zWeather = z.enum(["SUNNY", "RAINY", "OVERCAST", "NIGHT"]);
const zAngle = z.enum(["FRONT", "SIDE", "REAR"]);

export const imageRouter = createTRPCRouter({
  getStats: protectedProcedure.query(async ({ ctx }) => {
    const [cleanCount, dirtyCount, unverifiedCount] = await Promise.all([
      ctx.db.busImage.count({ where: { label: "CLEAN" } }),
      ctx.db.busImage.count({ where: { label: "DIRTY" } }),
      ctx.db.busImage.count({ where: { isVerified: false } }),
    ]);

    return { cleanCount, dirtyCount, unverifiedCount };
  }),

  getInfiniteImages: protectedProcedure
    .input(
      z.object({
        limit: z.number().min(1).max(100).default(20),
        cursor: z.string().nullish(), 
      })
    )
    .query(async ({ ctx, input }) => {
      const items = await ctx.db.busImage.findMany({
        take: input.limit + 1, 
        cursor: input.cursor ? { id: input.cursor } : undefined,
        orderBy: [
          { isVerified: "asc" }, 
          { createdAt: "desc" }, 
        ],
      });

      let nextCursor: typeof input.cursor | undefined = undefined;
      if (items.length > input.limit) {
        const nextItem = items.pop();
        nextCursor = nextItem!.id;
      }

      return { items, nextCursor };
    }),

  updateImage: protectedProcedure
    .input(
      z.object({
        id: z.string(),
        label: zLabelStatus,
        confidence: z.number().min(1).max(100).optional().nullable(),
        fleetNumber: z.string().optional().nullable(),
        cameraId: z.string().optional().nullable(),
        timeTaken: z.date().optional().nullable(),
        weatherCondition: zWeather.optional().nullable(),
        cameraAngle: zAngle.optional().nullable(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      // The input types will now perfectly match your Prisma schema
      return ctx.db.busImage.update({
        where: { id: input.id },
        data: {
          label: input.label,
          confidence: input.confidence,
          fleetNumber: input.fleetNumber,
          cameraId: input.cameraId,
          timeTaken: input.timeTaken,
          weatherCondition: input.weatherCondition,
          cameraAngle: input.cameraAngle,
          isVerified: true, 
          labeledById: ctx.session.user.id,
        },
      });
    }),
});