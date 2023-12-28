const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connect = require('./src/config/db/db');
const app = express();
dotenv.configDotenv();
app.use(express.json());

connect();
app.use(cors(
    {
        origin: 'http://localhost:3000',
        credentials: true
    }
));


app.listen(process.env.PORT, () => {
    console.log(`Listening at http://localhost:${process.env.PORT}`);
}
)
