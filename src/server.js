import express from 'express';

const app = express();

app.use(async (request, response) => {
  response.redirect('http://lightfold.com.br')
})

app.listen(3005, '0.0.0.0', () => {
  console.log('Running')
})
