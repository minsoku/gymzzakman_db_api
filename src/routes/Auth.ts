import express from 'express';
import RegisterEamil from '../controller/RegisterEmail';

const router = express.Router();

router.use(function timeLog(req, res, next) {
    console.log('Auth, Time: ', Date.now());
    next();
});

router.post('/register/email', RegisterEamil.postEmail);

export default router;