const { Schema, model} = require('mongoose');

const movementSchema = new Schema({
    type: String,
    concept: String,
    mount: String,
    user: String
});

module.exports = model('Movement', movementSchema)