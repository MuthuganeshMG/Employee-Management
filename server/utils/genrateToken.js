// const jwt = ("jsonwebtoken");

// exports.generateTokenAndSetCookie = (userId, res) => {
// 	const token = jwt.sign({ userId }, process.env.JWT_SECRET||yourSecretKey, {
// 		expiresIn: "15d",
// 	});

// 	res.cookie("jwt", token, {
// 		maxAge: 15 * 24 * 60 * 60 * 1000, //MS
// 		httpOnly: true, // prevent XSS attacks cross-site scripting attacks
// 		sameSite: "strict", // CSRF attacks cross-site request forgery attacks
// 		secure: process.env.NODE_ENV !== "development",
// 	});
// };
 

const jwt = require('jsonwebtoken');  // Ensure you import jsonwebtoken here

const generateTokenAndSetCookie = (userId, res) => {
    const token = jwt.sign({ userId }, process.env.JWT_SECRET, { expiresIn: '1h' });

    res.cookie('jwt', token, { 
        httpOnly: true, 
        secure: process.env.NODE_ENV === 'production', 
        maxAge: 3600000 });
    return token;
};

module.exports = { generateTokenAndSetCookie };
