const express = require("express");
const app = express();
var port = process.env.PORT || 3000;

app.get("/", (req,res) => {
    res.send( "<h3>This is an API. Try: /api/hello</h3>" );
});

app.get("/api/hello", (req,res) => {
    res.json( {"hello": "world"} );
});

//////////
app.listen(port, function(){
    console.log(`Started. Listening on PORT ${port} (example: http://localhost:3000/api/hello)`);
});

module.exports = app;