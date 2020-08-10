const express = require('express');
const cors = require('cors');
const app = express();

const data = require('./data.js');

app.use(cors());

app.get("/api/products", (req, res) => {
    res.json(data.products);
})

app.listen(5000, () => {
    console.log("server run on port 5000");
})