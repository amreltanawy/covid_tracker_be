const TempratureData = require("../models/TempratureData");

// Create and Save a new Temprature Data
exports.createTempratureController = (req, res) => {
    console.log("reached create controller");
    let {name,
        country,
        temprature,
        dateOfBirth,
        weight,
        gender,
        coordinates} = req.body;
    if(!temprature || !coordinates) return res.status(400).json({error:"invalid data"})
    const tempratureEntry = new TempratureData({
       name,
        country,
        temprature,
        dateOfBirth,
        weight,
        gender,
        coordinates
    });
    tempratureEntry
        .save()
        .then((data) => {
            return res.send(data);
        })
        .catch((err) => {
            return res.status(500).json({
                message:
                    err.message || "Some error occurred while creating the Message.",
            });
        });
};

// Retrieve all messages from the database.
exports.findAllTempratureController = (req, res) => {
    console.log("reached fetch controller");
    TempratureData.find()
        .then((data) => {
            return res.send(data);
        })
        .catch((err) => {
            return res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving messages.",
            });
        });
};