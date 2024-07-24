import express from 'express';
import CreatePost from '../controller/CreatePost';
import DeletePost from '../controller/DeletePost';


const router = express.Router();

router.use(function timeLog(req, res, next) {
    console.log('Community, Time: ', Date.now());
    next();
});

router.post('/post', CreatePost.Post);
router.delete('/post', DeletePost.Delete)

export default router;