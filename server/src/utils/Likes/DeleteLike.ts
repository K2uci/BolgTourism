import { Request, Response } from 'express';
const pgLoadAll = require('../../models/db')

const DeleteLike = async ( req:Request , res:Response ) => {
    res.set("Content-Type", "application/json");
    const { pid , uid} = req.params
    try {
        const sql = `delete from "Like" where postid=${pid} and userid=${uid};`
        var response = await pgLoadAll.query(sql);
        res.status(200).json(response.rows);
        return 
    } catch (error) {
        console.log(error)
    }
}

module.exports = DeleteLike;