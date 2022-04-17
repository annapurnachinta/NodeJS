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

    // db.collection('users').findOne({ name: 'Annapurna'}, (error, user) => {
    //     if(error){
    //         return console.log('Unable to find user')
    //     }

    //     console.log(user)
    // })

    // db.collection('task').findOne({ _id: new ObjectId('625c2bafdc5956baf48e374b')}, (error, user) => {
    //     if(error){
    //         return console.log('Unable to find user')
    //     }

    //     console.log(user)
    // })


    db.collection('task').find({ completed: false}).toArray((error, user) => {
        if(error){
            return console.log('Unable to find user')
        }

        console.log(user)
    })
})