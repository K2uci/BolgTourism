import { Request, Response } from 'express';
const pg4 = require('../../models/db')

const LoadAllDestinations = async ( req:Request , res:Response ) => {
    res.set("Content-Type", "application/json");
    try {
        const sql = `select * from "Destination" order by createdat desc;`
        var response = await pg4.query(sql);
        res.status(200).json(response.rows);
        return 
    } catch (error) {
        console.log(error)
    }
}

module.exports = LoadAllDestinations;