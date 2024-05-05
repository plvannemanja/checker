var express = require('express')
const path = require("path");
var app = express()
app.use(express.static(path.join(__dirname)));
app.listen(3000, "localhost", () => {
    console.log("server started at http://localhost:3000");
})