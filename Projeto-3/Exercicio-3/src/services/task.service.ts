import { Task } from "../models/task.model";


class TaskService {

 taskList: Array<Task> = [
   {
    id: 1,
    description: 'Fazer café',
    completed: false
   },
   {
    id: 2,
    description: 'Tomar café',
    completed: false
   },
 ]

 getAllTask(){
   return this.taskList
 }

 getTaskById(id: number){
return this.taskList.find((task) => task.id === id)
 }

 createTask(task: Task){
  return this.taskList.push(task)
 }

 getTaskByFindIndex(id: number){
   return this.taskList.findIndex((task) => task.id === id)
 }

 update(id: number, task: Task){
   this.taskList[id] = {
     id: task.id,
     description: task.description,
     completed: task.completed
   }
 }

remove(id: number){
  return this.taskList.splice(id, 1)
}

}

export default new TaskService;