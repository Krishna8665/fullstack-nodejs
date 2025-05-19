const { books } = require("../database/connection");

exports.fetchBooks =  async(req, res) => {
    //logic to fetch books from database
    const datas = await books.findAll()
    res.json({
       message : " books fetched successfully",
       datas

    })
},

exports.addBook =  async function(req, res) {
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

};

exports.deleteBook =  (req, res) => {
    res.json({
        message: "Book Deleted"

    })
};
exports.editBook = (req, res) => {
    res.json({
        message: "Book Updated"

    })
}

exports.singleFetchBook = async function(req,res){
    // first capture what id is he/she sending 
    const id = req.params.id // 2
    const datas = await books.findByPk(id) // always returns object, mongoose --> findById
    // books.findAll({
    //     where : {
    //         bookName : "hello world", 
    //         authorName : "manish"
    //     }
    // })
    // }) // select * from books where bookName="hello world" && authorName = "manish"
    // const datass = await books.findAll({
    //     where : {
    //         id : id
    //     }
    // }) // always returns array
    res.json({
        message : "Single Book fetched successfully", 
        datas, 
        // datass
    })

}