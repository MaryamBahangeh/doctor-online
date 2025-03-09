import { PrismaClient, Prisma } from "@prisma/client";

const prisma = new PrismaClient();

const users: Prisma.UserCreateInput[] = [
  {
    name: "Maryam Bahangeh",
    username: "maryambahangeh",
    email: "maryam@bahangeh.com",
    password: "1234",
  },
];

export async function main() {
  for (const user of users) {
    await prisma.user.create({ data: user });
  }
}

main().then(() => console.log("Done!"));
