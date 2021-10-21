const Lugar = require("../models/lugar");
const mongoose = require("mongoose")

exports.postAgregarLugar = async (req, res) => {
    var unico = true;
    const condicion = { lugar: req.body.lugar, pais: req.body.pais };
    var inte = {};
    await Lugar.findOne({ lugar: req.body.lugar, pais: req.body.pais }, function (err, lu) {
        if (err) {
            console.log(err);
            res.send({ operacion: "incorrecta" })
        }
        if (lu) {
            const update = lu.interes+1;
            inte = {interes: update};
            unico = false;
        } else {
            const lugar = new Lugar(req.body);
            lugar._id = new mongoose.Types.ObjectId();
            lugar.save();
            console.log("Lugar registrado");
            res.send({ operacion: "correcta" })
        }
    }).clone();

    if (!unico) {
        try {
            await Lugar.findOneAndUpdate(condicion, inte);
            unico = true;
            res.send({ operacion: "Aumenta el interes del lugar" });
        } catch (err) {
            console.log(err);
            res.send({ operacion: "incorrecta" })
        }
    }
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

