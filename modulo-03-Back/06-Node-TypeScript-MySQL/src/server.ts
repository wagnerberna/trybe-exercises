import express from 'express';

const app = express();

app.get('/', (req, res) => res.json({ message: 'Hello Word' }));

app.listen(3000);
