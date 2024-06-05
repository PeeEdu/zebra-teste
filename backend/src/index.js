import express from 'express';
import cors from 'cors';
import {encodeCrypto} from './cryptography.js'

const app = express();
const port = 8080;

app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'DELETE', 'UPDATE', 'PUT', 'PATCH'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json());

app.get('/', async (req, res) => {

  const url = 'https://servicodados.ibge.gov.br/api/v1/localidades/estados?view=nivelado';

  try {
    const response = await fetch(url);
    const data = await response.json();
    const arrayState = data.map(state => { 
      const id = state['UF-id'];
      const name = encodeCrypto(state['UF-nome']);
      return { id, name };
    });

    res.status(200).send(arrayState);

  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
});

app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
