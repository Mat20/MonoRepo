import express from 'express';

const routes =  express.Router()


routes.get('/', (request, response) => {
  return response.json({ menssage: 'Hello World' })
})

routes.post('/posts', (request, reponse) => {
  return response.json({ menssage: 'New post' })
})

export default routes