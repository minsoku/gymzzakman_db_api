import { Application } from "express";

import Auth from "../routes/Auth";

class Routes {
    public Auth (_express: Application): Application {
        return _express.use('/auth', Auth)
    }
}

export default new Routes;
