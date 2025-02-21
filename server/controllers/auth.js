const bcrypt = require('bcrypt');
const authModel = require('../models/auth');

const register = async (req, res) => {
    try {
        const { firstname, lastname, email, password } = req.body
        const hashedPassword = await bcrypt.hash(password, 10)
        const existedEmail = await authModel.findOne({ email })
        if (existedEmail) {
            return res.status(400).json({
                sucsess: false,
                msg: "Email already exists. Please use another"
            })
        }
        const register = await authModel.create({
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            email: req.body.email,
            password: hashedPassword,
        })
        res.status(201).json({
            success: true,
            register
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            error
        })
    }
}

const login = async (req, res) => {
    try {
        const { email, password } = req.body
        const existedUser = await authModel.findOne({ email })
        if (!existedUser) {
            return res.status(409).json({
                sucsess: false,
                msg: "Email not found, please create your account"
            })
        }
        const comparePassword = await bcrypt.compare(password, existedUser.password)
        if (!comparePassword) {
            return res.status(400).json({
                sucsess: false,
                msg: "Invalid Email or Password"
            })
        }
        res.status(200).json({
            success: true,
            msg: 'User logged in'
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            error
        })
    }
}
module.exports = { register, login }