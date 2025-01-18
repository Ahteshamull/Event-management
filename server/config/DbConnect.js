const mongoose = require("mongoose")
const Database = process.env.DB_URL
const DbConnect = () => {
     try {
         mongoose.connect(Database).then(() => {
            console.log("Database is connected ....")
        })
     } catch (error) {
        console.log(error)
     }
} 
module.exports = DbConnect