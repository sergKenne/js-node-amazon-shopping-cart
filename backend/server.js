import express from 'express';
import cors from 'cors';
const app = express();

import {data} from './data'
app.use(cors());

app.get("/api/products", (req, res) => {
    res.json(data.products);
})

app.listen(5000, () => {
    console.log("server run on port 5000");
})