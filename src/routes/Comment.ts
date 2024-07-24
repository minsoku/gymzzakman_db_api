import express from 'express';
import CreateComment from '../controller/CreateComment';

const router = express.Router();

router.use(function timeLog(req, res, next) {
    console.log('Commnet, Time: ', Date.now());
    next();
});

router.post('/post', CreateComment.Post);

export default router;