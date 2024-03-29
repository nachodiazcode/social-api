'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema ;

let MessageSchema = Schema({

    text: String,
    viewed: String,
    created_at: String,
    emitter: {type: Schema.ObjectId, ref:'User'},
    receiver: {type: Schema.ObjectId, ref: 'User'},
    
})

module.exports = mongoose.model('Message', MessageSchema);