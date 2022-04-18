import { Router, Request, Response } from "express";

import productService from "../services/product.service";

const router = Router();
const products = productService

router.get('/', (req: Request, res:Response) => {
  res.status(200).send(productService.getAll())
})

router.get('/:id', (req: Request, res: Response) => {
  const product = products.getById(parseInt(req.params.id))
  if(!product){
    res.status(404).send({message: 'Não encontrado'})
  }else {
    res.status(200).send(product)
  }
})

router.post('/', (req: Request, res: Response) => {
  const product = req.body; 
  products.create(product)
  res.status(201).send("Sucesso!")
})

router.put('/:id', (req: Request, res: Response) => {
const body = req.body
const productIndex = products.getByFindIndex(parseInt(req.params.id))
if(productIndex === -1){
  res.status(404).send('Não encontrado')
}else {
 products.update(productIndex, body)
 res.send('concluido')
}

})

router.delete('/:id', (req: Request, res: Response) => {
 const product = products.getByFindIndex(parseInt(req.params.id))
 if(product === -1){
   return res.status(404).send('Não encontrado')
 } else
 products.removeByFindIndex(product)
 res.status(200).send("Excluido com Sucesso")

})


export default router;

