"use strict";

const {updateUserDB } = require("../../service/db");

module.exports.putUser = async (event) => {
  const idUser = event.queryStringParameters.id;
  const {userName,lastName} = JSON.parse(event.body);
  const params = {
    TableName: "userTable",
    Key: {
      id: idUser,
    },
    UpdateExpression: "set userName= :u, lastName= :l",
    ExpressionAttributeValues: {
      ":u": userName,
      ":l": lastName
    },
  };
  return updateUserDB(params);
};
