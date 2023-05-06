const { getUsers } = require('../models/user');

const getUsersWithPagination = async (skip, take) => {
  return await getUsers(skip, take);
};

module.exports = { getUsersWithPagination };
