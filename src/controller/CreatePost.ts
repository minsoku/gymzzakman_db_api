import { Request, Response } from "express";
import Database from "../model/Database";

class CreatePost {
    public static async Post(req: Request, res: Response) {
        try {
            const {author_id, title, category,  content, lat, lng} = req.body;
            const query = `INSERT INTO POSTS (author_id, title, content, lat, lng, category) VALUES (?, ?, ?, ?, ?, ?);`;
            const result = await Database.Query(query,[author_id, title, content, lat, lng, category]);
            return res.send(result);
        } catch(error) {
            console.error(error);
            return res.status(500).send({ error: 'CreatePost : INTERNAL_ERROR' });
        }
    }
}

export default CreatePost