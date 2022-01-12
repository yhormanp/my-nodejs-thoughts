const mongoose = require('mongoose');
const dotenv = require('dotenv')
dotenv.config();

exports.dbConnect = async () => {
    mongoose.connection.on("connecting", ()=> {
        console.log('connecting to mongo db')
    })

    mongoose.connection.on("connected", ()=> {
        console.log("connection to mongodb was stablished successfully");
    })

    try {
        const dbUri = process.env.DATABASE_URI;
        await mongoose.connect(dbUri, {useNewUrlParser: true, useUnifiedTopology: true});
    } catch (error) {
        console.error('Error found connecting to mongodb', error);
    }
}