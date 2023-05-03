const User = require('../models/user.models');
const jwt = require("jsonwebtoken")
const {JWT_SECRET} = require("../config")

const endcodedToken = (userID) => {
    return jwt.sign({
        iss: "Nguyen Khac Duy",
        idUser: userID,
        iat: new Date().getTime(),
        exp: new Date().setDate(new Date().getDate()+3),
    },JWT_SECRET);
};


module.exports = class userApi {
    static async Register(req, res) {
        const { username, password } = req.body;
        const foundUser = await User.findOne({ username });
        if (foundUser) {
            return res.status(403).json({ message: "User already registered" });
        } else {
            try {
                const newUser = await User.create({
                    username: username,
                    password: password,
                });
                const token = endcodedToken(newUser._id);
                res.setHeader("Authorization", token);
                res.status(201).json({ message: "User created successfully!" , token});
            } catch (error) {
                res.status(400).json({ message: error.message });
            }
        }
    }
    static async Login(req, res, next) {
        const { username, password } = req.body;
        try {
           
            const user = await User.findOne({username: username});
            const authHeader = await req.header("Authorization")
         

            const decode = await jwt.decode(authHeader.replace(/"/g, ''), JWT_SECRET);
            // const decode = await jwt.decode(authHeader, JWT_SECRET);
            // console.log(decode.sub, user._id.valueOf());
            // res.setHeader("Authorization", decode);
            console.log(authHeader);
            console.log(decode);
            console.log(user);
            if(decode.idUser === user._id.valueOf()){
                return res.status(200).json({ message: "Login successful", user});
            }
            return res.status(404).json({
                success: false,
                message: "Access Token not found"

            })
        } catch (error) {
            console.log(error);
        }
    }
    static async getAllUser(req, res) {
        try {
            const users = await User.find();
            res.status(200).json(users);
        } catch (error) {
            res.status(404).json({ message: error.message });
        }
    }
    static async getUser(req, res) {
        try {
            const id = req.params.id;
            const user = await User.findById(id);
            console.log(user);
            res.status(200).json(user);
        } catch (error) {
            res.status(404).json({ message: error.message });
        }
    }
    static async deleteUser(req, res) {
        const id = req.params.id;
        try {
            await User.findByIdAndDelete(id);
            res.status(200).json({ message: "User was deleted successfully" });
        }
        catch (error) {
            res.status(404).json({ message: error.message });
        }
    };
    static async updateUser(req, res) {
        try {
            const id = req.body.id;
            console.log(req.params.id);
            const newUser = req.body;
            const result = await User.findByIdAndUpdate(id, newUser);
            return res.status(200).json({ message: "User update successfully!" });
        } catch (error) {
            res.status(404).json({ message: error.message });
        }
    }
};