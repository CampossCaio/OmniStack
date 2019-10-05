const Spot = require('../models/Spot');

module.exports = {
   async  show(req, res) {
        const { user_id } = req.headers;
        
        //Buscando todos os spots onde o campo user: é igual a user_id
        const spots = await Spot.find({ user: user_id });

        return res.json(spots);
    }
}