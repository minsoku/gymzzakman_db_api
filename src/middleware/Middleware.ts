import {Application} from "express";
import CORS from "./CORS";
import Morgan from "./Morgan";
import Json from "./Json";

class Middleware {
    public static init(_express: Application): Application {
        _express = CORS.mount(_express);

        _express = Morgan.mount(_express);

        _express = Json.mount(_express);
        return _express;
    }
}

export default Middleware;
