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


