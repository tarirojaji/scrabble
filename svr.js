import express from 'express';

const app = express();
app.use(express.static('main'));
app.listen(8080);
