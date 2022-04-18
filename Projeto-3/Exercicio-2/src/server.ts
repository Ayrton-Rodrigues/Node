import express, { Request, Response } from 'express';
import cors from 'cors';
import productRouter from './routes/products.routes'

const app = express();
app.use(cors())
app.use(express.json())
app.use('/products', productRouter)
const port = 3000

app.listen(port, () => {
  console.log(`Servidor ativo na porta: ${port}`)
} )

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!!!')
})