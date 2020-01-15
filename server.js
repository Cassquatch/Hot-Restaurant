const fs = require("fs");
const express = require("express");
const path = require("path");

const app = express();

const port =  3000;

//set up express app to parse
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//route handling
app.get("/tables", (req, res) => {
    res.sendFile(path.join(__dirname, "tables.html"));


});

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "home.html"));
});

app.get("/api/reservation", (req, res) => {
    res.sendFile(path.join(__dirname, "reservation.html"));
});

app.get("/api/tables", (req, res) => {
    fs.readFile("./tables.JSON", (err, data) => {
        if(err) throw err;

        res.json(JSON.parse(data));
    });

    fs.readFile("./waitlist.JSON", (err, data) => {
        if(err) throw err;
        res.json(JSON.parse(data));
    });
   
});


app.post("/api/tables", (req, res) => {
    const req_body = req.body;

    
   

    res.status(204).send();

    fs.readFile("./tables.JSON", (err, data) => {
        if(err) throw err;
        let data_object = JSON.parse(data);
        
        if(data_object.length < 5){
            fs.writeFile("./tables.JSON",  JSON.stringify(req_body), () => {
                console.log("file written");
            });
        }
        if(data_object.length > 5){

            fs.writeFile("./waitlist.JSON", JSON.stringify(req_body), () => {
                console.log("waitlist written");
            });
        }
      
    });


});











//start listening on a port
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
})
