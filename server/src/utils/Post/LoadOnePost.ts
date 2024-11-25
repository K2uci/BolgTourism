import { Request, Response } from 'express';
const pgLoadAll = require('../../models/db')

const loadAll = async (req: Request, res: Response) => {
    const { id } = req.params
    res.set("Content-Type", "application/json");
    try {
        const sql = `SELECT * FROM "Post" WHERE id=${id};`
        var response = await pgLoadAll.query(sql);
        res.status(200).json(response.rows[0]);
        return
    } catch (error) {
        console.log(error)
    }
}

module.exports = loadAll;