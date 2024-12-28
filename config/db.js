const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

// exports.connectDB = async () => {try {
  
    
//     mongoose.set("strictQuery", false)
//     const con = await mongoose.connect(process.env.MONGO_URI);
//     console.log("mongoose is connected", con.connection.host);
// } catch (error) {
//   console.log("connection faied....")
// }

// }

const connectDB = async () => {
  try {
    mongoose.set("strictQuery", false)
    console.log("call env file");
    // console.log(process.env.MONGO_URI,"---------database")
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected");
  } catch (err) {
    console.error("Error connecting to MongoDB", err);
    process.exit(1);
  }
};

module.exports = connectDB;





// ----------------------------------------
// const mongoose = require('mongoose');



// const connectDB = async () => {
//   try {
    
//     // Set mongoose to not use strict query mode
//     mongoose.set('strictQuery', false);

//     // Log a message for debugging
//     console.log('Connecting to MongoDB...');

//     await mongoose.connect('mongodb://localhost:27017/testdb');
//     console.log('MongoDB Connected');

//     // Connect to MongoDB using the connection string from environment variables
//     // await mongoose.connect(process.env.MONGO_URI, {
//     //   useNewUrlParser: true,
//     //   useUnifiedTopology: true,
//     // });

//     // Log success message after successful connection
//     console.log('MongoDB connected');
//   } catch (err) {
//     // Log any error that occurs during the connection attempt
//     console.error('Error connecting to MongoDB:', err.message);
    
//     // Exit the process with a failure code if the connection fails
//     process.exit(1);
//   }
// };

// module.exports = connectDB;

