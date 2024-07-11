import express, {Application} from "express";
import cors from "cors";
import morgan from "morgan";

import Envs from "../provider/Envs";


class Http {
    public static mount(_express: Application): Application {
        const option = {
            origin: Envs.config().APP_URL,
             optionsSuccessStatus: 200
         }
        _express.use(express.json());

        _express.use(express.urlencoded({extended: true}));

        _express.disable('x-powered-by');

        if (Envs.config().NODE_ENV === 'production') {
            _express.use(morgan('combined'));
        } else {
            _express.use(morgan('dev'));
        }

        _express.use(cors(option));


        return _express;
    }
}

export default Http;
