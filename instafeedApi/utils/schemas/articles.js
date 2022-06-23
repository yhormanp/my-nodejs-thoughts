
/* eslint-disable no-undef */
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const {v4: uuidv4}= require('uuid');
const articleSchema = new Schema({
    // id: {
    //     type: String,
    // },
    _id: {
        type: String, default: function genUUID() {
            return uuidv4()
        }
    },

    title: {
        type: String,
    },
    author: {
        type: String,
    },
    modifiedAt: {
        type: String,
    },
    publishedAt: {
        type: String,
    },
    url: {
        type: String,
    },
    keywords: {
        type: Array,
    },
    readMins: {
        type: Number
    },
    source: {
        type: String
    }
})

const Articles = mongoose.model('article', articleSchema)

module.exports = { Articles };