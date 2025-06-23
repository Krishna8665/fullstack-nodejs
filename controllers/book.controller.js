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
    if(!bookName || !bookGenre || !bookAuthor || !bookPrice){   //Application validation for filling data
        return res.json({

            message : "Please provide all the datas..."
        }
        )
    }
    //check if all data aako cha vane only proceed, else not proceed throw error in response
    await books.create({   //front end ta aako data tyo table ma save garcha ani book add vayesi msg pathauncha front end lai
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

exports.deleteBook = async function(req,res){
    // first ma hami, kun book delete garna aatekoho tesko id lim. 
    const id = req.params.id // const {id} = req.params
//    const id = req.body.id 
    // id payisakeypaxi, tyo id ko book chai books table bata udaidim 
    await books.destroy({
        where : {
            id
        }
    }) // delete from books where id = id
    res.json({
      message : "Book Deleted successfully"
    })
}

exports.editBook = async function(req,res){
   try {
     // logic to update book
    // kun id ko chai edit garne tyo id linu paryo . 
    const id = req.params.id
    // k k update garne tw .. 
    const {bookName,price,bookAuthor,bookGenre} = req.body

    await books.update({bookName,price, bookAuthor,bookGenre },{
        where : {
            id : id
        }
    })
    // books.findByIdAndUpdate(id,{})

    res.json({
      message : "Book updated successfully"
    })
   } catch (error) {
    res.json({
        message : "Something went wrong"
    })
   }
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