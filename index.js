const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const app = express();

// connect mongodb
mongoose  
      .connect("mongodb://localhost/xlenznode",{ usenewurlparser: true })
      .then(()=> console.log("connected to mongodb..."))
      .catch(err=>console.error(err))
      app.use(express.json())
      app.get('/',(req,res)=>{
          res.send({message:"welcome to node"})
      })
      const port = 3000;
      app.listen(port,()=> console.log(`listening on port ${port}.....`));