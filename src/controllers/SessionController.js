const User = require('../models/User');
//index, show, store, update, destroy

module.exports = {
     store(req, res) {
        const { email } = req.body;

        let user = User.findOne({ email });

        if(!user) {
            user =  User.create({ email });
        }
   
        return res.json(user);
    }  
};