import { response } from "express";
import { getAllTitle,createTitle,updateTitle,updateStatus,deleteTitle} from "..//models/todoModell.js";



export const getTodoService = async()=>{
    const [result]=await getAllTitle()
    return result
}

export const createTodoService = async(title)=>{

    if(!title){
        throw new Error ('title is required')
    }

    const [result] = await createTitle(title)
    return result
}

export const updateTodoTitleService = async(id,title)=>{
    if(!id || !title){
        throw new Error ('id and title required')
    }

    const [result]=await updateTitle(id,title)

    if(result.affectedRows!=1){
        throw new Error ('Todo Not found')
    }

    return result
}

export const updateStatusService = async(id,status)=>{

    // property identical
    if(status !==0 && status !==1){
        throw new Error ('status must be 0 or 1')
    }
    const [result]=await updateStatus(id,status)
    if(result.affectedRows!=1){
        return {
            status: 404,
            Message:"Data Tidak Ditemukan"
        }
        
    }
    return result
}


export const deleteTitleService = async(id) => {
    const [result]=await deleteTitle(id)

    if(result.affectedRows!=1){
        throw new Error ('Delete Failed')
    }
}