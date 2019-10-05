const express = require('express');
const mongoose = require('mongoose');
const routes =  require('./routes');
const cors = require('cors');
const path = require('path');
const app = express();

                               //usuári0 : senha                          //nome da base de dados
mongoose.connect('mongodb://omnistack:omnistack@cluster0-shard-00-00-8jkd4.mongodb.net:27017,cluster0-shard-00-01-8jkd4.mongodb.net:27017,cluster0-shard-00-02-8jkd4.mongodb.net:27017/semana09?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

//Métodos http
//GET, POST, PUT, DELETE

//req.query = Acessar query params { filtro }
//req.params = Acessar route params { edição, delete}
//req.body Acessar corpo da requisição

//Para a aplicação aceitar requisições Json

//cors controla quais urls poderão requisitar nossa api
app.use(cors());
app.use(express.json());

app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads')));
app.use(routes);

app.listen(8081);