import express from 'express'
import cors from 'cors'

const app = express()

app.use(cors({
  origin: '*',
  methods: '*',
  allowedHeaders: '*'
}))

app.get('/api/ping', (req,res)=>{
  res.json({ok:true})
})

app.listen(3001, ()=>{
  console.log('Backend rodando')
})
