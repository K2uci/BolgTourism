import { Request, Response } from 'express';
const pg1 = require('../../models/db');

const loadAllCommentById = async ( req:Request , res:Response ) => {
    res.set("Content-Type", "application/json");
    const id = req.params.id
    const sql = `SELECT c.id,c.content,c.createdAt,c.updatedAt,c.postId,u.name AS authorid
        FROM "Comment" c JOIN "User" u ON c.authorId = u.id WHERE c.postid = ${id}
        ORDER BY c.createdAt DESC;`
    try {
        var response = await pg1.query(sql);
        res.status(200).json(response.rows);
        return 
    } catch (error) {
        console.log(error)
    }
}

module.exports = loadAllCommentById;