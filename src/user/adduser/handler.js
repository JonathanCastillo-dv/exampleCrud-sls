"use strict";
const { v4: uuidv4 } = require('uuid');
const { putUserDB } = require('../../service/db');

module.exports.addUser = async (event) => {
const data = event.body;
const params = {
    TableName: "userTable",
    Item: {
      id: uuidv4(),
      data
    },
  };
  return putUserDB(params);
};

