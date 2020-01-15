const fs = require("fs");
const express = require("express");
const path = require("path");

const app = express();

const port =  3000;

//set up express app to parse
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//route handling
app.get("/api/tables", (req, res) => {
    res.sendFile(path.join(__dirname, "tables.html"));
});

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "home.html"));
});

app.get("/api/reservation", (req, res) => {
    res.sendFile(path.join(__dirname, "reservation.html"));
});




app.post("/api/tables", (req, res) => {
    const req_body = req.body;

    
    console.log(req_body);

    res.status(204).send();


});











//start listening on a port
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
})
