import express from 'express';

const app = express();

app.use(async (request, response) => {
  response.redirect('http://jobconcierge.lightfold.com.br')
})

app.listen(80, '0.0.0.0', () => {
  console.log('Running')
})
