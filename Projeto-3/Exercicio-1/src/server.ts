import express, { Request, Response } from 'express';
import cors from 'cors';



const app = express();
app.use(express.json())
app.use(cors())
const port = 3000
app.listen(port, () => {
  console.log(`Servidor ativo na porta: ${port}`)
})

const messageSucessOrError = {
 messageSucces: 'Sucesso',
 messageError: 'Não encontrado'
}

const students = [
  {
      id: 1,
      name: 'Nathan',
      email: 'nathan@gmail.com'
  },
  {
      id: 2,
      name: 'Otavio',
      email: 'otavio@gmail.com'
  },
  {
      id: 3,
      name: 'Ricardo',
      email: 'ricardo@gmail.com'
  }
];


app.get('/', (req: Request, res: Response) => {
  res.status(200).send(students)
})

app.get('/students/:id', (req: Request, res: Response) => {
  const student = students.find((std) => std.id === parseInt(req.params.id))
  if(!student){
    res.status(404).send(messageSucessOrError.messageError)
  }else {
    res.status(200).send(student)
  }
})


app.post('/students', (req: Request, res: Response) => {

  students.push(req.body)
  res.status(201).send(messageSucessOrError.messageSucces)
})

app.put('/students/:id', (req: Request, res: Response) => {
  const body = req.body
  const student = students.find((std) => std.id === parseInt(req.params.id))
  if(!student){
    res.status(404).send(messageSucessOrError.messageError)
  }else {
    student.id = body.id
    student.name = body.name
    student.email = body.email
    res.status(200).send(student)
  }
})

app.delete('/students/:id', (req: Request, res: Response) => {
  const studentIndex = students.findIndex((std) => std.id === parseInt(req.params.id)) 
  console.log(studentIndex)
  if(studentIndex === -1){
    res.status(404).send(messageSucessOrError.messageError)
  }else {
  students.splice(studentIndex, 1)
  res.status(200).send(students)
}
})