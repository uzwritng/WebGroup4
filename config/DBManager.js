const { MongoClient } = require("mongodb");

//URL
const connectionString = "mongodb+srv://"
const DBClient = new MongoClient(connectionString);

//name of DB & Collection
const dbName = "test_database";
const collName="test_collection";

let DBObject;
async function ConnectDB()
{
    /*
    DESC : connect to DB
    output(boolean) = true(connected) / false(not connected)
     */
}



async function GetAllBookInfo()
{
    /* 
    output(list) = list of book info
    */
}

async function AddBookInfo(book)
{
    /* 
    output(boolean) = true(add success) or false(add failed)
    */
}

async function RemoveBookInfo(title)
{
    /* 
    output(boolean) = true(remove success) or false(remove failed)
    */
}


module.exports = {
    ConnectDB,
    GetAllBookInfo,
    AddBookInfo,
    RemoveBookInfo
  };
