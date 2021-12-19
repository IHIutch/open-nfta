const prisma = new PrismaClient();

export const prismaGetStops = async ({
  where: {},
  select: [],
  include: [],
}) => {
  return await prisma.stop.findMany({
    where,
    // select: select || null,
    include: include || null,
  });
};

export const prismaGetStop = async ({ where: {}, select: [], include: [] }) => {
  return await prisma.stop.findUnique({
    where,
    // select: select || null,
    include: include || null,
  });
};
