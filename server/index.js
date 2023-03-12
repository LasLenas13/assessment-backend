const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const { getCompliment, getFortune, postZen, putMind, achieveOne } = require('./controller')

app.get("/api/compliment", getCompliment);

app.get("/api/fortune", getFortune);

app.post("/api/zen", postZen);

app.put("/api/mindfulness", putMind);

app.delete("/api/oneness/:name", achieveOne);

app.listen(4000, () => console.log("Server running on 4000"));
