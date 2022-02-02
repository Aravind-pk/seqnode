const express = require ("express");
const app = express();
const db = require("./models");

// you can add more models like {User,Blog,..}
const { User } = require('./models')

app.get('/all',( req,res)=>{
    User.findAll()
        .then(result =>  res.send(result))  
        .catch(err => console.log(err));
    
});

app.get('/insert',( req,res)=>{

    User.create({
        name:"james",
        phone: 1234567890
    })
    
    .then(result => res.send(result))
    .catch(err =>console.log(err))
});


app.get('/delete',( req,res)=>{
    User.destroy( {where:{id:2}})
    .then(result =>console.log(result))
    .catch(err => console.log(err))
});

app.get('/update',( req,res)=>{
    User.update(
        {phone:85487945211},
        {where:{id:1}}
        )
    .then(result =>console.log(result))
    .catch(err => console.log(err))
});


db.sequelize.sync().then(req =>{ 
    app.listen(3000 , ()=>{
        console.log("server running");
    })
});