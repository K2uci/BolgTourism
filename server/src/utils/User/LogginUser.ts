import { Request, Response } from 'express';
const jwt = require('jsonwebtoken');
const pg3 = require('../../models/db')


const logginUser = async (req: Request, res: Response) => {
    res.set("Content-Type", "application/json");
    const { email, password } = req.body;
    try {
        var response = await pg3.query(`select * from "User" where email='${email}' and password='${password}';`);
        if (response.rows.length > 0) {
            var responseUsersData = await pg3.query(`select id,name,email,image from "User" where email='${email}';`);
            const payload = { email, password }
            const secretKey = 'Tourism'
            const token = jwt.sign(payload, secretKey, { expiresIn: '1h' });
            res.status(200).json({ token , user:responseUsersData.rows[0]});
        } else {
            res.status(200).json(null);
        }
        return
    } catch (error) {
        console.log(error)
    }
}

module.exports = logginUser;