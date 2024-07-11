import mysql, { Pool, PoolOptions } from "mysql2";
import Envs from "../provider/Envs";

class Database {
    private static pool: Pool;

    public static async init(): Promise<Pool> {
        if (this.pool) {
            return this.pool;
        }
        const option: PoolOptions = {
            host: Envs.config().DB_HOST,
            user: Envs.config().DB_USER,
            password: Envs.config().DB_PASSWORD,
            port: Envs.config().DB_PORT,
            database: Envs.config().DB_NAME
        };
        this.pool = await mysql.createPool(option);
        return this.pool;
    }

    public static async insertQuery<T>(query: string, values: string[]): Promise<T[]> {
        const pool = await this.init();
        return new Promise((resolve, reject) => {
            pool.query(query, values, (err, res) => {
                if (err) {
                    return reject(err);
                }
                return resolve(res as T[]);
            })
        })
    }
}

export default Database;
