import * as dotenv from 'dotenv';
import * as path from 'path';
import {Application} from "express";

class Envs {
    public static config(): any {
        dotenv.config({path: path.join(__dirname, "../../.env")});
        const PORT = process.env.PORT || 4000;
        const APP_URL = process.env.APP_URL || "http://localhost:4000";
        const NDOE_ENV = process.env.NODE_ENV || "development";

        const DB_HOST = process.env.DB_HOST || "localhost";
        const DB_USER = process.env.DB_USER || "minsoku";
        const DB_PASSWORD = process.env.DB_PASSWORD || "1q2w3e4r";
        const DB_PORT = process.env.DB_PORT || 3306;
        const DB_NAME = process.env.DB_NAME || "express_test";
        const HASH_ROUNDS = typeof process.env.HASH_ROUND === "string" ? parseInt(process.env.HASH_ROUND) || 10 : 10;

        return {
            PORT,
            APP_URL,
            NDOE_ENV,
            DB_HOST,
            DB_USER,
            DB_PASSWORD,
            DB_PORT,
            DB_NAME,
            HASH_ROUNDS
        }
    }
    public static init (_express: Application): Application {
        _express.locals.app = this.config();
        return _express;
    }
}

export default Envs;
