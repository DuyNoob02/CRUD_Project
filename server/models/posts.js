const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    title:{
        type: String,
        require: [true, "Content must have a name"],
    } ,
    category: String,
    content: String,
    image: String,
    created: {
        type: Date,
        default: Date.now
    }
});

const Post = mongoose.model("Post", postSchema);

module.exports = Post;