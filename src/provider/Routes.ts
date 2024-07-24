import { Application } from "express";

import Auth from "../routes/Auth";
import Community from '../routes/Community';
import Comment from '../routes/Comment';

class Routes {
    public Auth (_express: Application): Application {
        return _express.use('/auth', Auth);
    }
    public Community (_express: Application): Application {
        return _express.use('/community', Community);
    }
    public Comment (_express: Application): Application {
        return _express.use('/comment', Comment);
    }
}

export default new Routes;
