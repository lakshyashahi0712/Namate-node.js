const {MongoClient} =  require("mongodb")


const url = "mongodb+srv://lakshyashahi0712:lakshyashahi0712@cluster0.6j7dqek.mongodb.net/"

const client = new MongoClient(url);

const dbName = "HelloWorld";

async function main () {
    
    await client.connect();
    console.log("connected successfully to server");
    const db = client.db(dbName);
    const collection = db.collection("User");


    const data = {
        firstname :"lak",
        lastname:"sharma",
        city:"delhi"
    }
    const insertResult = await collection.insertMany([data])

    //code to create object in db
    // const insertResult = await collection.insertMany([{ a: 1 }, { a: 2 }, { a: 3 }]);
    console.log('Inserted documents =>', insertResult);

    //code to delete object in db
//     const deleteResult = await collection.deleteMany({ a: 1 });
// console.log('Deleted documents =>', deleteResult);


//code to update object in db
// const updateResult = await collection.updateOne({ a: 3 }, { $set: { b: 1 } });
// console.log('Updated documents =>', updateResult);



    //code to find files in db
    const findResult = await collection.find({}).toArray();
    console.log('Found documents =>', findResult);
    return "done";
}

main()
.then(console.log)
.catch(console.error)
.finally(()=>client.close());
