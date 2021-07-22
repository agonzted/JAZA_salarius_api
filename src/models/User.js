const { Schema, model} = require('mongoose');
const movementSchema = new Schema({
    user: String,
    password: String,
});

module.exports = model('User', movementSchema)
