const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: true,
        required: true,
        minlength: [4, "atleast 4 characters"]
    },

    email: {
        type: String,
        unique: true,
        required: true,
        minlength: [8, "atleast 8 characters"]
    },

    password: {
        type: String,
        unique: true,
        required: true,
        minlength: [4, "atleast 4 characters"]
    },

    balence: {
        type: Number,
        default: 1000
    },

    players: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Player'
        }],
    role: {
        type: String,
        enum: ['user', 'admin'],
        default: 'user'
    },


})
const User = mongoose.model('user', userSchema)

module.exports = User;

