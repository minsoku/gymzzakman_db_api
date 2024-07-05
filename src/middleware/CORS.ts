import {Application} from "express";
import cors from "cors";

import Envs from "../provider/Envs";

class CORS {
    public mount(_express: Application): Application {
         const option = {
            origin: Envs.config().APP_URL,
             optionsSuccessStatus: 200
         }

         _express.use(cors(option));

         return _express;
    }
}

export default new CORS;
