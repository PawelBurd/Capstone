const express = require('express');
const router = express.Router();
const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;

//Connect
const connection = (closure) => {
    return MongoClient.connect('mongodb://localhost:27017/capstone', (err,db) => {
        if (err) return console.log(err);

        closure(db);
    });
};

//Error Handling
const sendError = (err,res) => {
    response.status = 501;
    response.messe = typeof err == 'object' ? err.message : err;
    res.status(501).json(response);
};

//Response Handeling
let response = {
    status: 200,
    data: [],
    message: null
};

//Get Users
router.get('/users', (req,res) => {
    connection((db) => {
        db.collection('users')
            .find()
            .toArray()
            .then((users) => {
                response.data = users;
                res.json(response);
            })
            .catch((err) => {
                sendError(err,res);
            });
    });
});

module.exports = router;