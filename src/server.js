const  express = require('express');
const routes =  require('./routes');

const app = express();

//Métodos http
//GET, POST, PUT, DELETE

//req.query = Acessar query params { filtro }
//req.params = Acessar route params { edição, delete}
//req.body Acessar corpo da requisição

//Para a aplicação aceitar requisições Json
app.use(express.json());
app.use(routes);

app.listen(8081);