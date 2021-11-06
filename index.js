const express = require('express');
var cors = require('cors');
const app = express();
app.use(express.json());

app.use(cors());

app.set('port', process.env.PORT || 3000);

app.use(require('./routes/persona'));
app.use(require('./routes/maestros'));
app.use(require('./routes/estudiantes'));
app.use(require('./routes/security'));
app.use(require('./routes/cursos'));
app.use(require('./routes/cursoestudiante'));
app.use(require('./routes/cursodocente'));

app.get('/', (req,res) =>{
    res.status(200).send('index');  
} )

app.listen(app.get('port'), () => {
    console.log(`Server en puerto ${app.get('port')}`);
});

/* https://salty-mesa-38125.herokuapp.com/*/