const { Schema, model} = require('mongoose');

const movementSchema = new Schema({
    type: String,
    concept: String,
    mount: String
});

module.exports = model('Movement', movementSchema)