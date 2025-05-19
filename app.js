const express = require("express");
const { books } = require("./database/connection");
const app = express()
//let app = require("express")()

app.use(express.json())



app.get("/books", async(req, res) => {
    //logic to fetch books from database
    const datas = await books.findAll()
    res.json({
       message : " books fetched successfully",
       datas

    })
});

app.post("/books", async function(req, res) {
    //logic to add book to database goes here...
    //console.log(req.body)
    //const bookName = req.body.bookName
    //const bookPrice = req.body.bookPrice

    const { bookName, bookPrice, bookAuthor, bookGenre } = req.body
    //check if all data aako cha vane only proceed, else not proceed throw error in response
    await books.create({
        bookName,
        price: bookPrice,
        bookAuthor,
        bookGenre
        //columName: value            
    })
    res.json({
        message : "Book added successfully"
    })

})


app.get("/about", (req, res) => {
    res.json({
        name: "This is the about page"

    })
});













//postgresql://postgres.ksqeybasyvmjoeexeesf:[YPASSWORDOUR-]@aws-0-ap-south-1.pooler.supabase.com:6543/postgres



app.listen(3000,function(){
    console.log("server/backend/nodesjs has started at port 3000")
})
