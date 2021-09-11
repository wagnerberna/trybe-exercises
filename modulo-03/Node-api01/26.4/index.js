const express = require('express');
const rescue = require('express-rescue');

const app = express();
const router = express.Router();

const authMiddleware = (req, res, next) => {
    if(req.headers.authorization) {
        next();
    } else {
        res.status(401).send({
            message: 'Token inválido!'
        });
    }
}

const logMiddleware = (req, res, next) => {
    console.log(`${req.method}: ${req.path}`);
    next();
};

const errorMiddleware = (err, req, res, next) => {
    console.log(err.stack);
    res.status(500).send({
        message: "Algo deu errado :("
    });
};

router.use(authMiddleware);
app.use(logMiddleware);
app.use(express.json());

router.get('/dash', (req, res) => {
    res.send({
        message: "Admin Dashboard"
    });
});

app.use('/admin', router);


app.get('/', (req, res)=> {
    res.send("Hello Old World!");
});

app.get('/node', (req, res) => {
    res.send({
        message: "Hello, Node!"
    })
});

app.post('/node', (req, res) => {
    console.log(req.body);
    res.send(req.body);
});

app.get('/error', rescue(async (req, res) => {
    throw new Error('Errrrrrrrrrou!');
}));

app.use(errorMiddleware);

app.listen(3000, () => {
    console.log('App rodando na porta 3000')
});