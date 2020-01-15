const fs = require("fs");
const express = require("express");

const app = express();

const port =  3000;

//set up express app to parse
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//route handling
app.post("/api/tables", (req, res) => {
    const req_body = req.body;

    
    fs.readFile("./tables.JSON", (err, data) => {
        if(err) throw err;

        let tables_str = JSON.stringify(data);
        console.log(tables_str);
    })


});











//start listening on a port
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
})
