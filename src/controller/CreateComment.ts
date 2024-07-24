import { Request, Response } from "express";
import Database from "../model/Database";

class CreateComment {
    public static async Post(req: Request, res: Response) {
        try {
            const { content, postId, user_id } = req.body;
            const query = `INSERT INTO COMMENTS (comment_content, post_id, user_id) VALUES (?, ?, ?);`;
            const result = await Database.Query(query, [content, postId, user_id]);
            return res.send(result);
        } catch(error) {
            console.error(error);
            return res.status(500).send({ error: 'CreateComment : INTERNAL_ERROR'});
        }
    }
}

export default CreateComment;