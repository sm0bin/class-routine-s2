const Class = require('../models/class');
const errorHandler = require('../utils/errorHandlers');

// get all classes
const getAllClasses = async (req, res, next) => {
    try {
        const classes = await Class.find();
        res.status(200).json(classes);
    } catch (error) {
        next(error);
    }
};

// get a class by id
const getClassById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const classById = await Class.findById(id);
        // res.status(200).json(classById);
        res.send(classById);
    } catch (error) {
        next(error);
    }
};

// create a class
const createClass = async (req, res, next) => {
    try {
        const newClass = await Class.create(req.body);
        res.status(201).json(newClass);
    } catch (error) {
        next(error);
    }
};

// update a class
const updateClass = async (req, res, next) => {
    try {
        const { id } = req.params;
        const result = await Class.findByIdAndUpdate(
            id,
            req.body,
            { new: true }
        );
        res.status(200).json(result);
    } catch (error) {
        // next(error);
        res.status(500).json({ message: error.message });
        console.log(error.message);
    }
};


// delete a class
// const deleteClass = async (req, res, next) => {
//     try {
//         const { id } = req.params;
//         const result = await Class.findByIdAndDelete(id);
//         res.status(200).json(result);
//     } catch (error) {
//         next(error);
//     }
// };

module.exports = {
    getAllClasses,
    getClassById,
    // createClass,
    updateClass,
    // deleteClass
};