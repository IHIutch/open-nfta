const prisma = new PrismaClient();

export const prismaGetRoutes = async ({
  where: {},
  select: [],
  include: [],
}) => {
  return await prisma.route.findMany({
    where,
    // select: select || null,
    include: include || null,
  });
};

export const prismaGetRoute = async ({
  where: {},
  select: [],
  include: [],
}) => {
  return await prisma.route.findUnique({
    where,
    // select: select || null,
    include: include || null,
  });
};
