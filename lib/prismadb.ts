import {PrismaClient} from "../app/generated/prisma" ;

const client = global.prismadb || new PrismaClient();

if(process.env.NODE_ENV === 'production') global.prismadb = client;

export default client;
