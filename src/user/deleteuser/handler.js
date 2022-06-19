"use strict";
const { deleteUserDB } = require("../../service/db");
module.exports.deleteUser = async (event) => {
  const idUser = event.queryStringParameters.id;
  const params = {
    TableName: "userTable",
    Key: {
      id: { S: idUser },
    },
  };
  return deleteUserDB(params);
};
