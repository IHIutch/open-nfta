import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const prismaGetTrips = async ({
  where = {},
  select = [],
  include = [],
}) => {
  return await prisma.trips.findMany({
    where: {
      id: where?.id ? parseInt(where.id) : undefined,
      routeId: where?.routeId ? parseInt(where.routeId) : undefined,
      serviceId: where?.serviceId ? parseInt(where.serviceId) : undefined,
      tripId: where?.tripId ? parseInt(where.tripId) : undefined,
      tripHeadsign: where?.tripHeadsign || undefined,
      directionId: where?.directionId ? parseInt(where.directionId) : undefined,
      blockId: where?.blockId ? parseInt(where.blockId) : undefined,
      shapeId: where?.shapeId ? parseInt(where.shapeId) : undefined,
    },
    // select: select || null,
    // include: include || null,
  });
};
