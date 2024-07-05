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

    public static async query<T>(query: string, values?: any[]): Promise<T> {
        const pool = await this.init();
        const [rows] = await pool.query<T[]>(query, values);
        return rows;
    }
}

export default Database;
