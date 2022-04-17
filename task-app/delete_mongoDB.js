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

//    db.collection('users').deleteOne({ 
//         _id: new ObjectId('625b033d122020895c1994ec')
//     }).then((result) => {
//         console.log(result)
//     }).catch((error) => {
//         console.log(error)
//     })

    db.collection('users').deleteMany({ 
        age: 24
    }).then((result) => {
        console.log(result)
    }).catch((error) => {
        console.log(error)
    })

})