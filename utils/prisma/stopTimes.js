const prisma = new PrismaClient();

export const prismaGetStopTimes = async ({
  where: {},
  select: [],
  include: [],
}) => {
  return await prisma.stopTime.findMany({
    where,
    // select: select || null,
    include: include || null,
    orderBy: {
      stopSequence: "desc",
    },
  });
};

export const prismaGetStopTime = async ({
  where: {},
  select: [],
  include: [],
}) => {
  return await prisma.stopTime.findUnique({
    where,
    // select: select || null,
    include: include || null,
  });
};
