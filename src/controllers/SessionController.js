const User = require('../models/User');
//index, show, store, update, destroy

module.exports = {
    async store(req, res) {
        const { email } = req.body;
         
        //Procura o email no banco
        let user = await User.findOne({ email });

        
        if(!user) {
            user =  await User.create({ email });
        }
        //console.log(email);
        //console.log(user);
   
        return res.json(user);
    }  
};