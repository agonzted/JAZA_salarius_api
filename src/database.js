const mongoose = require('mongoose');

async function connect(){
    try {
        await mongoose.connect('mongodb+srv://Gonzed:p54cSHFkZWF7IqwL@gonzed.jakgp.mongodb.net/Gonzed?retryWrites=true&w=majority', 
        {
            useNewUrlParser: true
        });
        console.log('Database: Connected');
    } catch (e) {
        console.log('Something went wrong!');
        console.log(e);
    }
};

module.exports = { connect };