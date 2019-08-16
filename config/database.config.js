const dbConfig = require('../util/constants');
const mongoose = require('mongoose');


mongoose.connect(dbConfig.URL, {useNewUrlParser: true})
    .then(() => console.log("Successfully connected to the database"))
    .catch(err => {
        console.log('Could not connect to the database.', err);
        process.exit();
    });