import mongoose from 'mongoose';

mongoose.model('Roles', new mongoose.Schema({
    Role: String
}));
module.exports = mongoose.model('Roles');
