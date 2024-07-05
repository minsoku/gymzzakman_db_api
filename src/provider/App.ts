import Express from './Express';
import Database from "../model/Database";

class App {
    public loadServer(): void {
        console.log("App Server 연결")
        Express.init();
    }

    public loadDatabase(): void {
        console.log("App Database 연결")
        Database.init();
        console.log(Database.query("SELECT * FROM USERS"));
    }

}

export default new App;
