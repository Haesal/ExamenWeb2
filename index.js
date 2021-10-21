const express = require("express");
const mongoose = require("mongoose");
const lugarRoutes = require("./routes/lugar");
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use("/lugar",lugarRoutes);

mongoose.connect('mongodb://user5:root@54.173.202.133:27017/base5?authSource=admin') 
    .then(() => {
        app.listen(8080, () =>{
            console.log("Servidor online");
        })
    })
    .catch(err => console.log(err));