const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true,
    } ,
    category: {
        type: String,
        // required:true,
        unique: false
    },
    content: String,
    image: String,
    created: {
        type: Date,
        default: Date.now
    }
});

const Post = mongoose.model("Post", postSchema);

module.exports = Post;