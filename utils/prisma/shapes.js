const prisma = new PrismaClient();

export const prismaGetShapes = async ({
  where: {},
  select: [],
  include: [],
}) => {
  return await prisma.shape.findMany({
    where,
    // select: select || null,
    include: include || null,
    orderBy: {
      shapePtSeq: "desc",
    },
  });
};

export const prismaGetShape = async ({
  where: {},
  select: [],
  include: [],
}) => {
  return await prisma.shape.findUnique({
    where,
    // select: select || null,
    include: include || null,
  });
};
