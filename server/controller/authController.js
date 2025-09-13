const authModel = require('../models/authModel');
const bcrypt = require('bcrypt');
const { generateTokenAndSetCookie } = require('../utils/genrateToken');

// exports.signup = async (req, res) => {
//     try {
//         const { username, email, password } = req.body;

//         // Check if the username already exists
//         const existingUser = await authModel.findOne({ username });
//         if (existingUser) {
//             return res.status(400).json({ error: 'Username already used' });
//         }

//         // Check if the email already exists
//         const existingEmail = await authModel.findOne({ email });
//         if (existingEmail) {
//             return res.status(400).json({ error: 'Email already used' });
//         }

//         // Password length validation
//         if (password.length < 6) {
//             return res.status(400).json({ error: 'Password must be at least 6 characters long' });
//         }

//         // Hash the password before saving
//         const salt = await bcrypt.genSalt(10);
//         const hashedPassword = await bcrypt.hash(password, salt);

//         // Create a new user
//         const newUser = await authModel.create({
//             username,
//             email,
//             password: hashedPassword
//         });

//         // Generate token and set it in cookies
//         generateTokenAndSetCookie(newUser._id, res);

//         // Send success response
//         res.status(201).json({
//             _id: newUser._id,
//             username: newUser.username,
//             email: newUser.email
//         });
//     } catch (error) {
//         console.error('Signup error:', error);
//         res.status(500).json({ error: 'Internal Server Error' });
//     }
// };

exports.signup = async (req, res) => {
    try {
        const { username, email, password } = req.body;
        const existingUser = await authModel.findOne({ username });
        if (existingUser) {
            return res.status(400).json({error: 'username already used'});
        }

        const existingEmail = await authModel.findOne({ email });
        if (existingEmail) {
            return res.status(400).json({error: 'email already used'});
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = await authModel.create({
            username,
            email,
            password: hashedPassword
        });

        // Generate token and set in cookies
        generateTokenAndSetCookie(newUser._id, res);

        res.status(201).json({
            _id: newUser._id,
            username: newUser.username,
            email: newUser.email,
        });
    } catch (error) {
        console.log('Signup error:', error);
        res.status(400).json({ error: 'Signup error' });
    }
};

exports.login = async (req, res) => {
    try {
        const { username, password } = req.body;

        // Find user by username
        const user = await authModel.findOne({ username });
        if (!user) {
            return res.status(400).json({ error: 'Invalid username or password' });
        }

        // Compare the entered password with the hashed password in the database
        const isPasswordCorrect = await bcrypt.compare(password, user.password);
        if (!isPasswordCorrect) {
            return res.status(400).json({ error: 'Invalid username or password' });
        }

        // Generate token and set it in cookies
        generateTokenAndSetCookie(user._id, res);

        // Send success response with user data (excluding password)
        res.status(200).json({
            _id: user._id,
            username: user.username,
            email: user.email
        });
    } catch (error) {
        console.error('Login error:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

exports.logout = async (req, res) => {
    try {
        // Clear the JWT cookie to log out the user
        res.cookie('jwt', '', { maxAge: 0 });
        res.status(200).json({ message: 'Logged out successfully' });
    } catch (error) {
        console.error('Logout error:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

exports.getMe = async (req, res) => {
    try {
        // Get the authenticated user's data by the user ID (provided by middleware)
        const user = await authModel.findById(req.user._id).select('-password');
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        res.status(200).json(user);
    } catch (error) {
        console.error('GetMe error:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
