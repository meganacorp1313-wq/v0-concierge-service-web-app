import { PrismaClient, Role, Language } from "@prisma/client"
import bcrypt from "bcryptjs"

const prisma = new PrismaClient()

async function main() {
  const hashedPassword = await bcrypt.hash("admin123", 12)

  const admin = await prisma.user.upsert({
    where: { email: "admin@luxuryconcierge.com" },
    update: {},
    create: {
      email: "admin@luxuryconcierge.com",
      name: "Admin User",
      password: hashedPassword,
      phone: "+1 (809) 000-0000",
      language: Language.EN,
      role: Role.ADMIN,
    },
  })

  console.log({ admin })
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
