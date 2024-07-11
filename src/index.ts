import App from './provider/App';
import express from 'express';
// import cluster from "cluster";
// import os from "os";

// // if (cluster.isPrimary) {
// //     const CPUS: any = os.cpus();
// //     CPUS.forEach(() => cluster.fork());
// // } else {
// //     App.loadServer();
// //     App.loadDatabase();
// // }

App.loadServer();
App.loadDatabase();

