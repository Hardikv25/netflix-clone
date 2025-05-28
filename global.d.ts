import { PrismaClient } from "../app/generated/prisma";

declare global{
    namespace globalThis{
        var prismadb : PrismaClient
    }
} 