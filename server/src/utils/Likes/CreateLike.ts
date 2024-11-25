import { Request, Response } from 'express';
const pgLoadAll = require('../../models/db')

const CreateLike = async ( req:Request , res:Response ) => {
    res.set("Content-Type", "application/json");
    const { pid , uid} = req.params
    try {
        const sql = `insert into "Like"(postid,userid) values (${pid},${uid});`
        var response = await pgLoadAll.query(sql);
        res.status(200).json(response.rows);
        return 
    } catch (error) {
        console.log(error)
    }
}

module.exports = CreateLike;