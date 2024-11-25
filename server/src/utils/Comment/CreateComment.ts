import { Request, Response } from 'express';
const pgLoadAll = require('../../models/db')

const loadAll = async (req: Request, res: Response) => {
    res.set("Content-Type", "application/json");
    const id = req.params.id
    const { content , userId } = req.body;
    try {
        const sql = `INSERT INTO "Comment" (content, createdAt, updatedAt, postId, authorId)
                    VALUES ('${content}', NOW(), NOW(), ${id}, ${userId});`
        var response = await pgLoadAll.query(sql);
        res.status(200).json(response.rows);
        return
    } catch (error) {
        console.log(error)
    }
}

module.exports = loadAll;