const prisma = new PrismaClient();

export const prismaGetTimes = async ({
  where: {},
  select: [],
  include: [],
}) => {
  return await prisma.trip.findMany({
    where,
    // select: select || null,
    include: include || null,
    orderBy: {
      stopSequence: "desc",
    },
  });
};

export const prismaGetTime = async ({ where: {}, select: [], include: [] }) => {
  return await prisma.trip.findUnique({
    where,
    // select: select || null,
    include: include || null,
  });
};
