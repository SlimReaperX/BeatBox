const { PrismaClient } = require("@prisma/client");
const bcrypt = require("bcrypt");

const prisma = new PrismaClient();

async function seedDatabase() {
  try {

    await prisma.users.deleteMany();
    await prisma.roles.deleteMany();

    // Roles data
    const rolesData = [
      { name: "admin" },
      { name: "user" }
    ];

    // Create roles
    const roles = await Promise.all(rolesData.map(role =>
      prisma.roles.create({ data: role })
    ));

    // Hash password
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash("password", saltRounds);

    // Users data
    const usersData = [
      { email: "admin@example.com",
       password: hashedPassword, 
       roleId: roles[0].id 
      },
      { email: "user@example.com", 
      password: hashedPassword, 
      roleId: roles[1].id 
    }
    ];

    // Create users
    await Promise.all(usersData.map(userData =>
      prisma.users.create({ data: userData })
    ));

    console.log("Seeding successful");
  } catch (error) {
    console.error("Error seeding database:", error);
  } finally {
    await prisma.$disconnect();
  }
}

seedDatabase();
