import { Request, Response } from 'express';
const pgLoadAll = require('../../models/db')

const readLikeByID = async ( req:Request , res:Response ) => {
    res.set("Content-Type", "application/json");
    const id = req.params.id
    try {
        const sql = `select * from "Like" where userid=${id};`
        var response = await pgLoadAll.query(sql);
        res.status(200).json(response.rows);
        return 
    } catch (error) {
        console.log(error)
    }
}

module.exports = readLikeByID;