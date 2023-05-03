const Post = require('../models/posts');
const fs = require('fs');

module.exports = class API{
    //fetch all post
    static async fetchAllPost(req, res){
        try {
            const posts = await Post.find();
            res.status(200).json(posts);
        } catch (err) {
            res.status(404).json({message: err.message});
        }
    }
    //fetch post by ID
    static async fetchPostByID(req, res){
        const id = req.params.id;
        // console.log(id)
        // const id = req.params.id;
        try {
            const post = await Post.findById(id);
            res.send(post);
        } catch (err) {
            res.send({message: err.message});
            
        }
    }

    // create a post
    static async createPost(req, res){
        const {title, category, content, image} = req.body;
        const filename = req.file.filename;
        console.log(filename);
        try {
            // await Post.create(post);
            
            const newPost = new Post({
                title : title,
                category: category,
                content: content,
                image: filename
            });
            await newPost.save();
            res.status(201).json({
                message: 'Post created successfully!!',
                newPost
            });
        } catch (err) {
            res.status(400).json({message: err.message});
        }
    
    }

    //update a post
    static async updatePost(req, res){
        const id = req.params.id;
        let new_image = "";
        if(req.file){
            new_image = req.file.filename;
            try {
                fs.unlinkSync('./uploads' + req.body.old_image);
            } catch (err) {
                console.log(err);
            }
        }else{
            new_image = req.body.old_image;
        }
        const newPost = req.body;
        newPost.image= new_image;

        try {
            await Post.findByIdAndUpdate(id, newPost);
            res.status(200).json({message: 'Post updated successfully!'})
        } catch (err) {
            res.status(404).json({message: err.message});
        }
    }
    //delete a post
    static async deletePost(req, res){
        const id = req.params.id;
        try {
            const result = await Post.findByIdAndDelete(id);
            if(result.image != ''){
                try {
                    fs.unlinkSync('./uploads/' + result.image);
                } catch (err) {
                    console.log(err);
                }
            }
            res.status(200).json({message: 'Post deleted successfully!'});
        } catch (err) {
            res.status(404).json({message: err.message});
        }
    }
}