import express from 'express';

const app = express();

app.get('/', (request, response) => {
  return response.send("<h1>HELLO FROM NODE</h1>")
})

app.listen(3000, () => {
  console.log('Running')
})
