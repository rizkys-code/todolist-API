const response = (StatusCode, Message, data, res)=>{
    res.status(StatusCode).json({
        StatusCode,
        Message,
        data
    })
}

export default response