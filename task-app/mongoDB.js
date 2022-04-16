// CRED operation

const mongoDB = require('mongodb')
const mongoClient = mongoDB.MongoClient

const connectURL = "mongodb://127.0.0.1:27017"
const databaseName = 'task-app'

mongoClient.connect(connectURL, { useNewUrlParser: true }, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database')
    }

    const db = client.db(databaseName)

    // db.collection('users').insertOne({
    //     name: 'Annapurna',
    //     age: 24
    // }, (error, result) => {
    //     if(error){
    //         return console.log('Unable to insert user')
    //     }

    //     console.log(result.insertedId)
    // })

    // db.collection('users').insertMany([{
    //     name: 'Annapurna',
    //     age: 26
    // }, {
    //     name: 'Mohan',
    //     age: 28
    // }
    // ], (error, result) => {
    //     if (error) {
    //         return console.log('Unable to insert user')
    //     }

    //     console.log(result.insertedIds)
    // })

    db.collection('task').insertMany([{
        description: 'Clean the house',
        completed: true
    }, {
        description: 'Renew inspection',
        completed: false
    },{
        description: 'Pot plants',
        completed: false
    },
    ], (error, result) => {
        if (error) {
            return console.log('Unable to insert user')
        }

        console.log(result.insertedIds)
    })



})