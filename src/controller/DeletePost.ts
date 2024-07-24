import { Request, Response } from "express";
import Database from "../model/Database";

class DeletePost {
    public static async Delete(req: Request, res: Response) {
        try {
            const id = req.query.id as string;
            if (!id) {
                return res.status(400).send({ error: 'ID is required' });
            }
            const query = `DELETE FROM POSTS WHERE id = ?`;
            const result = await Database.Query(query, [id]);
            return res.send(result);
        } catch (error) {
            console.error(error);
            return res.status(500).send({ error: 'DeletePost : INTERNAL_ERROR' })
        }
    }
}

export default DeletePost;