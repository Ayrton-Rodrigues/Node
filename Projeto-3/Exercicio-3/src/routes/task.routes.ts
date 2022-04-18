import { Router, Request, Response } from 'express';
import taskService from '../services/task.service';

const router = Router();


router.get('/', (req: Request, res: Response) => {
  const task = taskService.getAllTask()
  res.status(200).send(task)
})


router.get('/:id', (req: Request, res: Response) => {
  const task = taskService.getTaskById(parseInt(req.params.id))
  if(!task){
    return res.status(404).send('Não encontrado!')
  }
  res.status(200).send(task)
} )


router.post('', (req: Request, res: Response) => {
  taskService.createTask(req.body)
  console.log(req.body)
    res.status(201).send('sucesso')
  
})


router.put('/:id', (req: Request, res: Response) => {
  const taskIndex = taskService.getTaskByFindIndex(parseInt(req.params.id))
  console.log(taskIndex)
  if(taskIndex === -1){
    return res.status(404).send('Não encontrado!')
  }else{
  taskService.update(taskIndex, req.body)
  res.status(200).send('sucesso')
  }
})


router.delete('/:id', (req: Request, res: Response) => {
  const taskIndex = taskService.getTaskByFindIndex(parseInt(req.params.id))
  if(taskIndex === -1){
    return res.status(404).send('Não encontrado!')
  }else{
   taskService.remove(taskIndex)
   res.status(200).send('Excluído com Sucesso!!')
  }

  
})


export default router;