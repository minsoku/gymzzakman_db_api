import { Application } from "express";

import birds from "../routes/birds";

class Routes {
    public birds(_express: Application): Application {
        return _express.use('/birds', birds);
    }
}

export default new Routes;
