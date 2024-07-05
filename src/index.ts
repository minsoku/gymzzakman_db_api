import cluster from "cluster";
import os from "os";
import App from './provider/App';

if (cluster.isPrimary) {
    const CPUS: any = os.cpus();
    CPUS.forEach(() => cluster.fork());
} else {
    App.loadServer();
    App.loadDatabase();
}
