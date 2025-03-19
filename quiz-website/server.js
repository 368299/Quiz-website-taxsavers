const express = require("express");
const fs = require("fs");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());
app.use(express.static("public"));

app.post("/save", (req, res) => {
    const { name, email, phone, score } = req.body;
    const data = `${name},${email},${phone},${score}\n`;
    fs.appendFile("data.csv", data, (err) => {
        if (err) res.status(500).send("Error saving data");
        else res.send("Data saved");
    });
});

app.listen(3000, () => console.log("Server running on http://localhost:3000"));
