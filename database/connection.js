//yeta hami database connection ko code lekhcham
const {Sequelize,DataTypes} = require ("sequelize")

//const sequelize = require ("sequelize")
//const sequelize = sequelize.sequelize
//const Datatype = sequelize.Datatype

const sequelize = new Sequelize (process.env.CS)

sequelize.authenticate()
    .then(() => {
        console.log("Authenticated vayo, connected vayo!!")
    })
    .catch((err) => {
        console.log("Error aayo" + err)
    })    

 const db = {}
 db.Sequelize = Sequelize   
 db.sequelize = sequelize  

 db.books = require("./models/book.Model")(sequelize,DataTypes)


 sequelize.sync({alter : false }).then (() => {
    console.log("Mitigate vayo hai tw")
 }).catch((err)=>{
    console.log("Unable to create table")
 })

 

 module.exports = db 