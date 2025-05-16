const express = require("express")
const app = express()
//let app = require("express")()

require("./database/connection")



app.get("/", (req, res) => {
    res.json({
        name : "Manish",
        address : "Itahari"
    })
});


app.get("/about", (req, res) => {
    res.json({
        name: "This is the about page"

    })
});













//postgresql://postgres.ksqeybasyvmjoeexeesf:[YPASSWORDOUR-]@aws-0-ap-south-1.pooler.supabase.com:6543/postgres



app.listen(3000,function(){
    console.log("server/backend/nodesjs has started at port 3000")
})
