import { getTodoService, createTodoService, updateTodoTitleService,updateStatusService,deleteTitleService } from '../service/todoService.js'
import  response  from '../../response.js'

export const getAllTitleController = async (req,res)=>{
    try{
        const data = await getTodoService()
        response(200,"Todo Successfuly Add", data,res)
    }catch(error){
        response(500,"Error",error,res)
    }
}

export const createTitleController = async(req,res)=>{
    try{
        const {title} = req.body
        const data = await createTodoService(title)
        response(200,"todo seuccessfuly added", data,res)
    }catch(err){
        console.log(err)
        response(500,"Internal Server Error", err,res)
    }
}

export const updateTitleController = async (req,res)=>{
    try{
        const id = req.params.id
        const {title}=req.body
        const data= await updateTodoTitleService(id,title)

        response(200,"Update successfuly",data,res)
    }catch(err){
        console.log(err)
        response(500,"Internal Server Error",err,res)
    }
}

export const updateStatusController = async (req,res)=>{
    try{
        const {id} = req.params
        const {status}=req.body
        const data =await updateStatusService(id,status)
            response(200,"Berhasil Update status",data,res)
    }catch(err){
        console.log(err)
        response(500,"internal Server Error",err,res)
    }
}


export const deleteTitleController = async (req,res)=>{
    try{
        const {id}=req.params
        const result =await deleteTitleService(id)
        response(200,"Deleted SuccessFuly",result,res)
    }catch(err){
        response(500,"Internal Server Error",err,res)
    }
}