import express from 'express';
import RegisterEmail from '../controller/RegisterEmail';

const router = express.Router();

router.use(function timeLog(req, res, next) {
    console.log('Auth, Time: ', Date.now());
    next();
});

router.post('/register/email', RegisterEmail.Post);

export default router;