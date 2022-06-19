"use strict";
const { v4: uuidv4 } = require('uuid');
const { putUserDB } = require('../../service/db');

module.exports.addUser = async (event) => {
const {userName,lastName} = JSON.parse(event.body);
const params = {
    TableName: "userTable",
    Item: {
      id: uuidv4(),
      username:userName,
      lastname:lastName,
    },
  };
  return putUserDB(params);
};

