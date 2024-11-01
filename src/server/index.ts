import express from 'express';
import apiRouter from './api';

const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());
app.use(express.static('public'));
app.use(express.static('pages'));

app.use(apiRouter);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});