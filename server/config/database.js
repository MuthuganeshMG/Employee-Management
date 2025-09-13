// const mongoose = require('mongoose');

// const connectDatabase = () => {
//     mongoose.connect(process.env.DB_URI)
//         .then((con) => {
//             console.log('Mongodb is connected to host' + con.connection.host);
//         })
//         .catch((error) => {
//             console.error({error:'failed to mongodb connection'});
//         })
// };

// module.exports = connectDatabase;

const mongoose = require('mongoose');
// const dotenv = require('dotenv');
// dotenv.config();

const connectDatabase = async () => {
    try { 
        const connection = await mongoose.connect(process.env.DB_URI)

        console.log(`MongoDB connected to host: ${connection.connection.host}`);
    } catch (error) {
        console.error('Error connecting to MongoDB:', error.message);
        process.exit(1);  // Exit the process if DB connection fails
    }
};

module.exports = connectDatabase;

