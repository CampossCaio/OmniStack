const Spot = require('../models/Spot');
const User = require('../models/User');


module.exports = {
    //Busca uma lista de itens
    async index(req, res) {
      const { tech } = req.query;

      const spots = await Spot.find({ techs : tech });

      return res.json(spots);
    },
     
    //Busca apenas um item
     async store(req, res) {
       const { filename } = req.body;
       const { company, techs, price } = req.body;
       const { user_id } = req.headers;
       
       
       const user = await User.findById(user_id);

       if(!user){
         return res.status(400).json({error: 'User does not exists'});
       }
        
       const spot = await Spot.create({
         user: user_id,
         thumbnail: filename,
         company,
         // A função split(',') separa a string por virgulas e a função trim() corta os espaços entrem ela
         techs: techs.split(',').map(tech => tech.trim()),
         price
       })

       console.log(user_id);

       return res.json(spot);
    }
}