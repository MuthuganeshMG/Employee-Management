const AttendanceModel = require("../models/attendanceModel");

exports.addAttendance = async (req, res) => {
    const { name, id, location, area } = req.body;
    
    if (!name || !id || !location || !area) {
        return res.status(400).json({ error: "All fields are required." });
    }
    
    try {
        const present = await AttendanceModel.create({
            name,
            id,
            location,
            area
        });
        res.status(200).json(present);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};


exports.getAttendance = async (req, res) => {
    try {
        const presentList = await AttendanceModel.find();
        res.status(200).json(presentList);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};