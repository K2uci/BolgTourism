import { Request, Response } from 'express';
const pgLoadAll = require('../../models/db')

const loadAll = async ( req:Request , res:Response ) => {
    res.set("Content-Type", "application/json");
    try {
        const sql = `SELECT p.id, p.title, p.content, p.image, p.published, p.createdAt, p.updatedAt, p.authorId, p.destinationId,
                    COALESCE((SELECT COUNT(*) FROM "Comment" c WHERE c.postId = p.id), 0) AS commentCount,
                    COALESCE(like_count.total_likes, 0) AS likeCount
                    FROM "Post" p LEFT JOIN (SELECT postId, COUNT(*) AS total_likes FROM "Like" GROUP BY postId) like_count ON p.id = like_count.postId
                    ORDER BY p.createdAt DESC;`
        var response = await pgLoadAll.query(sql);
        res.status(200).json(response.rows);
        return 
    } catch (error) {
        console.log(error)
    }
}

module.exports = loadAll;