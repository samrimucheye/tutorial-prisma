import { PrismaClient } from "@prisma/client";

// Reuse PrismaClient instance across module reloads in development to avoid
// exhausting database connections (Next.js hot-reloads). See Prisma docs.
declare global {
  // eslint-disable-next-line no-var
  var prisma: PrismaClient | undefined;
}

const prisma = global.prisma ?? new PrismaClient();

if (process.env.NODE_ENV !== "production") global.prisma = prisma;

export default prisma;
