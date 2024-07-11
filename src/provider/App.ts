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
    }

}

export default new App;
