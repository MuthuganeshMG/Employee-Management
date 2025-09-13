const profileModel = require("../models/profileModel");

exports.createProfile = async (req, res) => {
    try {
        const { userId, name, number, dob, place } = req.body;
        // const img = req.file.filename;
        const img = req.file ? req.file.filename : 'default-profile.png';  // Handle image upload

        // Check if user exists
        // const user = await authModel.findById(userId);
        // if (!user) {
        //     return res.status(400).json({ error: 'User not found' });
        // }

        const newProfile = await profileModel.create({
            img,
            userId,
            name,
            number,
            dob,
            place
        });
        await newProfile.save();
        res.status(200).json(newProfile);
    } catch (error) {
        // console.error('Error creating profile:', error)
        res.status(400).json({ error: error.message });
    }
};


exports.getProfile = async (req, res) => {
    const { userId } = req.params; 

    try {
        // const profile = await profileModel.find();
        // const profile = await profileModel.findById(userId);  // Assuming the user profile is identified by ID
        const profile = await profileModel.findById({userId}).populate('userId');  // Assuming the user profile is identified by ID

        if (!profile) {
            return res.status(404).json({ error: "Profile not found" });
        }
        res.status(200).json(profile);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.editProfile = async (req, res) => {
    try {
        const { name, number, dob, place } = req.body;
        const img = req.file ? req.file.filename : null;

        const updateProfile = await profileModel.findByIdAndUpdate(
            req.params.id,
            {
                img: img || undefined,
                name,
                number,
                dob,
                place 
            },
            { new: true }
        );

        if (!updateProfile) {
            return res.status(404).json({ error: "Profile not found" });
        }
        console.log("Updated profile:", updateProfile);
        res.status(200).json(updateProfile);
    } catch (error) {
        console.error("Error updating profile:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};
