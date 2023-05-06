const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const getUsers = async (skip, take) => {
  return await prisma.user.findMany({ take, skip });
};

module.exports = { getUsers };
