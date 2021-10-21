const Lugar = require("../models/lugar");
const mongoose = require("mongoose")

exports.postAgregarLugar = (req, res) => {
    Lugar.findOne({lugar: req.body.lugar, pais: req.body.pais}, async function(err, lu){
            if(err){
                console.log(err);
                res.send({ operacion: "incorrecta" })
            }
            if(lu){
                try{
                    const condicion = {lugar: lu.lugar, pais: lu.pais};
                    const inte = {interes: lu.interes++};
                    await Lugar.findOneAndUpdate(condicion, inte);
                    res.send({ operacion: "Aumenta el interes del lugar" });
                }catch(err){
                    console.log(err);
                    res.send({ operacion: "incorrecta" })
                }
            } else{
                const lugar = new Lugar(req.body);
                lugar._id = new mongoose.Types.ObjectId();
                lugar.save();
                console.log("Lugar registrado");
                res.send({ operacion: "correcta" })
            }
    });
}

exports.getObtenerLugar = async (req, res) => {
    try {
        const lugar = await Lugar.find(req.body);
        console.log(lugar);
        res.json(lugar);
    } catch (err) {
        console.log(err);
        res.json({ operacion: "incorrecta" });
    }
}

