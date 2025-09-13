// const mongoose = require('mongoose');

// const profileSchema = new mongoose.Schema(
//     {
//         profileImg:{
//             type:String,
//             default: 'logo.png'
//         },
//         name: {
//             type: String,
//             required: true 
//         },
//         number: {
//             type: Number,
//             required: true
//         },
//         dob: {
//             type: String,
//             required: true
//         },
//         place: {
//             type: String,
//             required: true
//         }
//     },
//     {
//         timestamps: true
//     }
// );

// const profileModel = mongoose.model('profile', profileSchema);
// module.exports = profileModel;

const mongoose = require('mongoose');

// Profile Schema
const profileSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, // Link to User
  name: { type: String, required: true },
  number: { type: String, required: true },
  dob: { type: Date, required: true },
  place: { type: String, required: true },
  img: { type: String, default: 'default-profile.png' } // Optional image field
});

const profileModel = mongoose.model('Profile', profileSchema);
module.exports = profileModel;
