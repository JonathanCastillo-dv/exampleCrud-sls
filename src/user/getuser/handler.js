"use strict";
const { getUserDB } = require("../../service/db");

module.exports.getUser = async (event) => {
  const params = {
    TableName: "userTable",
  };
  return getUserDB(params);
};
