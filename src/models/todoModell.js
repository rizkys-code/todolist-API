import {db}  from '../config/connection.js'

export const getAllTitle=()=>{
    const sql = "SELECT * FROM todos"
    return db.query(sql)
}

export const createTitle=(title)=>{
    const sql = `INSERT INTO todos (title) VALUES('${title}')` 
    return db.query(sql)
}

export const updateTitle=(id,title)=>{
    const sql = `UPDATE todos SET title = '${title}' WHERE id = '${id}'`
    return db.query(sql)
}


export const updateStatus=(id,status)=>{
    const sql = `UPDATE todos SET status=${status} WHERE id = '${id}'`
    return db.query(sql)
}



export const deleteTitle=(id)=>{
    const sql = `DELETE FROM todos WHERE id = ${id}`
    return db.query(sql)
}

