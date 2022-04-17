// CRED operation
const { MongoClient, ObjectId } = require('mongodb')

const connectURL = "mongodb://127.0.0.1:27017"
const databaseName = 'task-app'

const id = new ObjectId()

MongoClient.connect(connectURL, { useNewUrlParser: true }, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database')
    }

    const db = client.db(databaseName)

//     const updatePromise = db.collection('task').updateOne({ 
//         _id: new ObjectId('625c2bafdc5956baf48e374b')
//     }, {
//         $set: {
//             completed: true
//         }
//     })

//     updatePromise.then((result) => {
//         console.log(result)
//     }).catch((error) => {
//         console.log(error)
//     })

//    db.collection('users').updateOne({ 
//         _id: new ObjectId('625b033d122020895c1994ec')
//     }, {
//         $inc: {
//             age: 1
//         }
//     }).then((result) => {
//         console.log(result)
//     }).catch((error) => {
//         console.log(error)
//     })

    db.collection('task').updateMany({ "description" : "Renew inspection" }, {
        $set: {
            completed: true
        }
    }).then((result) => {
        console.log(result.modifiedCount)
    }).catch((error) => {
        console.log(error)
    })

})