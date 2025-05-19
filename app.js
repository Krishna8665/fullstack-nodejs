const express = require("express");
const bookRoute = require("./routes/bookRoutes")
const app = express()
//let app = require("express")()

require("./database/connection")
app.use(express.json())

app.use("/api/",bookRoute)


















app.listen(3000,function(){
    console.log("server/backend/nodesjs has started at port 3000")
})
