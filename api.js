const express = require("express");
const app = express();

app.get("/", (req,res) => {
    res.send( "<h3>This is an API. Try: /api/hello</h3>" );
});

app.get("/api/hello", (req,res) => {
    res.json( {"hello": "world"} );
});

//////////
app.listen(3000, function(){
    console.log("Started. Listening on PORT 3000 (example: http://localhost:3000/api/hello)");
});

module.exports = app;