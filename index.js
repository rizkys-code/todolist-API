import express from 'express'
const app = express()
import todoRouter from './src/routes/todo.js    '
const port = 4000
import bodyParser from 'body-parser'
app.use(bodyParser.json())
import cors from 'cors'
app.use(cors())

app.use('/todo',todoRouter)

app.get('/', (req, res) => {
  res.send('API hidup')
})


app.listen(port,()=>{
    console.log(`Example app listening at http://localhost:${port}`)
})