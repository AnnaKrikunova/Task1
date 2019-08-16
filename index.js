const express = require('express');
const router = require('./router');
require('./config/database.config');
const dbconfig = require('./util/constants');
const cors = require('cors');

const app = express();


app.use(cors());
app.use(express.json());
app.use(router);

app.listen(dbconfig.PORT, () => {
    console.log("Server is listening on port 3002");
});