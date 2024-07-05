import express from "express";

import Envs from "./Envs";
import Routes from "./Routes";
import Middleware from "../middleware/Middleware";

class Express {
    public express: express.Application;

    constructor() {
        this.express = express();

        this.mountDotEnv();
        this.mountRoutes();
        this.mountMiddleware();
    }

    private mountDotEnv (): void {
        this.express = Envs.init(this.express);
    }

    private mountRoutes (): void {
        this.express = Routes.birds(this.express);
    }

    private mountMiddleware (): void {
        this.express = Middleware.init(this.express);
    }

    public init(): any {
        const port: number = Envs.config().PORT || 4000;

        this.express.listen(port, () => {
            return console.log(`[server]: Server is running at http://localhost:${port}`);
        }).on('error', (_error) => {
            return console.error(`[server]: Error: ${_error}`);
        })
    }
}

export default new Express();