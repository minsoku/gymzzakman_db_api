import {Application} from "express";
import morgan from "morgan";

import Envs from "../provider/Envs";

class Morgan {
    public mount(_express: Application): Application {
        if (Envs.config().NODE_ENV === 'production') {
            _express.use(morgan('combined'));
        } else {
            _express.use(morgan('dev'));
        }
        return _express;
    }
}

export default new Morgan;
