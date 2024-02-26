const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const bcrypt = require("bcrypt");

const adminRole = { name: "admin" };
const userRole = { name: "user" };

const roles = [adminRole, userRole];

const admin = [
  {
    email: "aaron@admin.com",
    password: "aaron123",
    roleId: 1,
  },
  {
    email: "mark@admin.com",
    password: "mark123",
    roleId: 1,
  },
  {
    email: "charles@admin.com",
    password: "charles123",
    roleId: 1,
  },
];

const user = [
  {
    email: "aang@avatar.com",
    password: "katara",
    roleId: 2,
  },
  {
    email: "gon@hunter.com",
    password: "whereismydad",
    roleId: 2,
  },
  {
    email: "tommy@shelby.com",
    password: "peakyblinders",
    roleId: 2,
  },
];

const allUsers = [...admin, ...user];

const hash = async () => {
  const salt = 5;
  for (let user of allUsers) {
    try {
      const hashPassword = await bcrypt.hash(user.password, salt);
      user.password = hashPassword;
    } catch (error) {
      console.log(error, "error hashing passwords");
    }
  }
};

hash();

const generateData = async () => {
  try {
    await prisma.users.deleteMany();
    console.log("Deleted records in users table");

    await prisma.roles.createMany({
      data: roles,
      skipDuplicates: true,
    });
    console.log("Added roles data");

    await prisma.users.createMany({
      data: allUsers,
      skipDuplicates: true,
    });
    console.log("Added all users data");

    console.log("Seeding successful");
  } catch (error) {
    console.error(e);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
};

generateData();
