import express, { Request, Response } from 'express';
import cors from 'cors';
import taskRouter from './routes/task.routes'


const app = express();
app.use(express.json());
app.use(cors());
const port = 3000;

app.use('/task', taskRouter)

app.get('/', (req: Request, res: Response) => {
  res.status(200).send("Hello World!!")
})

app.listen(port, () => {
  console.log(`Servidor ativo na porta: ${port}`)
})