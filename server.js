const express = require("express");

const cors = require("cors");

const app = express();

var corsOptions = {
    origin: "http://localhost:8080"
};

app.use(cors(corsOptions));

app.use(express.json());

app.get("/", (req, res) => {
    res.join({ message: "Hello!" });
});

const PORT = process.env.PORT || 8080

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
});