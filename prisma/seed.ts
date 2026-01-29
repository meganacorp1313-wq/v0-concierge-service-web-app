import { PrismaClient, Role, Language } from "@prisma/client"
import bcrypt from "bcryptjs"

const prisma = new PrismaClient()

async function main() {
  // Admin credentials
  const adminPassword = "Admin123!"
  const adminHashedPassword = await bcrypt.hash(adminPassword, 12)

  const admin = await prisma.user.upsert({
    where: { email: "admin@demo.com" },
    update: {},
    create: {
      email: "admin@demo.com",
      name: "Admin User",
      password: adminHashedPassword,
      phone: "+1 (809) 000-0000",
      language: Language.EN,
      role: Role.ADMIN,
    },
  })

  // Customer credentials
  const customerPassword = "Client123!"
  const customerHashedPassword = await bcrypt.hash(customerPassword, 12)

  const customer = await prisma.user.upsert({
    where: { email: "client@demo.com" },
    update: {},
    create: {
      email: "client@demo.com",
      name: "Demo Client",
      password: customerHashedPassword,
      phone: "+1 (809) 555-1234",
      language: Language.EN,
      role: Role.CUSTOMER,
    },
  })

  console.log("\n========================================")
  console.log("  SEED COMPLETE - Demo Credentials")
  console.log("========================================")
  console.log("\n  ADMIN USER:")
  console.log(`  Email:    admin@demo.com`)
  console.log(`  Password: ${adminPassword}`)
  console.log("\n  CUSTOMER USER:")
  console.log(`  Email:    client@demo.com`)
  console.log(`  Password: ${customerPassword}`)
  console.log("\n========================================\n")
  console.log("Created users:", { admin: admin.email, customer: customer.email })
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
