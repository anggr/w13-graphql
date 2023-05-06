const { getUsersWithPagination } = require('../controllers/userController');

const userResolvers = {
   Query: {
     async users(parent, { skip, take }, { prisma }) {
       return await prisma.user.findMany({
         skip: skip || 0,
         take: take || 10,
       });
     },
     async user(parent, { id }, { prisma }) {
       return await prisma.user.findUnique({
         where: { id: parseInt(id) },
       });
     },
   },
 
   Mutation: {
     async createUser(parent, { input }, { prisma }) {
       return await prisma.user.create({
         data: input,
       });
     },
 
     async updateUser(parent, { id, input }, { prisma }) {
       return await prisma.user.update({
         where: { id: parseInt(id) },
         data: input,
       });
     },
 
     async deleteUser(parent, { id }, { prisma }) {
       return await prisma.user.delete({
         where: { id: parseInt(id) },
       });
     },
   },
 };
 
 module.exports = userResolvers;
 