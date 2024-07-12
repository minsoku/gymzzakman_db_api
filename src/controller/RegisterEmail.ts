import { Request, Response } from "express";
import Database from "../model/Database";

class RegisterEamil {
    public static async postEmail(req: Request, res: Response) {
        try {
            const { name, nickname, email, password, phoneNumber, profileImage } = req.body;
            const result = await Database.insertQuery(`INSERT INTO USERS (name, nickname, email, password,  phoneNumber, profileImage) VALUES (?, ?, ?, ?, ?, ?)`, [name, nickname, email, password,  phoneNumber, profileImage]);
            return res.send(result)
        } catch(error) {
            console.error(error);
            return res.status(500).send({ error: 'INTERNAL_ERROR' });
        }
    }
}

export default RegisterEamil