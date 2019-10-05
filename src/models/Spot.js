const mongoose = require('mongoose');

const Spotschema = new mongoose.Schema({
    thumbnail: String,
    company: String,
    price: Number,
    techs: [String],
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
}, {
    // Informando que sempre que esseSchema for executado é para executar os virtuals também
    toJSON: {
        virtuals: true,
    }
});

//Schema virtual
Spotschema.virtual('thumbnail_url').get(function() {
    return `http://localhost:8081/files/${this.thumbnail}`;
    console.log(this.thumbnail);
})

module.exports = mongoose.model('Spot', Spotschema);