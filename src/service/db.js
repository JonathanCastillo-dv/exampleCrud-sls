const { PutCommand, UpdateCommand } = require("@aws-sdk/lib-dynamodb");
const { DynamoDBDocumentClient } = require("@aws-sdk/lib-dynamodb");
const { DynamoDBClient, ScanCommand, DeleteItemCommand } = require("@aws-sdk/client-dynamodb");
const ddbClient = new DynamoDBClient({ region: 'us-east-1' });

const putUserDB = async (params) => {
    console.log("PARAMS!",params)
    try {
        await ddbClient.send(new PutCommand(params));
        return {
            msg: 'successfully registered user',
        };
    } catch (error) {
        console.log("ERROR",error)
        return {
            error,
        }
    }
}

const getUserDB = async (params) => {
    try {
        return await (await ddbClient.send(new ScanCommand(params))).Items;
    } catch (error) {
        console.log("ERROR", error)
        return {
            error
        }
    }
}

const deleteUserDB = async (params) => {
    try {
        const data = await ddbClient.send(new DeleteItemCommand(params));
        return {
            msg: 'successfully deleted user',
        }
    } catch (error) {
        console.log("ERROR", error)
        return {
            error
        }
    }
}

const updateUserDB = async (params) => {
    try {
      const data =  await ddbClient.send(new UpdateCommand(params));
      console.log("updateUserDB",data)
        return {
            msg: 'successfully update user',
        }
    } catch (error) {
        console.log("ERROR", error)
        return {
            error
        }
    }
}

module.exports = {
    putUserDB,
    getUserDB,
    deleteUserDB,
    updateUserDB
};