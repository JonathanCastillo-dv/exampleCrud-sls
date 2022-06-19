const { PutCommand } = require("@aws-sdk/lib-dynamodb");
const { DynamoDBDocumentClient} =  require("@aws-sdk/lib-dynamodb");
const { DynamoDBClient, ScanCommand } =  require( "@aws-sdk/client-dynamodb");
const ddbClient = new DynamoDBClient({ region: 'us-east-1' });

const putUserDB = async(params)=>{
    try {
        await ddbClient.send(new PutCommand(params));
        return {
            msg:'successfully registered user',
        };
    } catch (error) {
        return {
            error,
        }
    }
}

const getUserDB = async(params)=>{
    try {
    return  await (await ddbClient.send(new ScanCommand(params))).Items;
    } catch (error) {
        console.log("ERROR",error)
        return {
            error
        }
    }
}

module.exports = {
    putUserDB,
    getUserDB
};