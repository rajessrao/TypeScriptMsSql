import express from 'express';
import bodyParser from 'body-parser';
import { Routes } from './routes';

class App {
    public app: express.Application = express();
    public routes: Routes = new Routes();

    constructor() {
        this.config();
        this.routes.routes(this.app);
    }

    private config() {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: true }));
    }
}

export default new App().app;