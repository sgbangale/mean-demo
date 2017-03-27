import mongoose from 'mongoose';

mongoose.model('Users', new mongoose.Schema({
    FirstName: String,
    LastName : String,
    Role : {type: mongoose.Schema.Types.ObjectId, ref: 'Roles' },
    Email: String,
    Password: String
}));
module.exports = mongoose.model('Users');