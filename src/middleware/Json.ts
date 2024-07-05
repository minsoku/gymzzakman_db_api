import {Application, json} from "express";

class Json {
    public mount (_express: Application): Application {
        _express.use(json());

        return _express;
    }
}

export default new Json();
