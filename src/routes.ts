import { Controller } from './controller';

export class Routes {
    public controller: Controller = new Controller();

    public routes(app: any) {
        app.route('/')
            .get(this.controller.greet);

        app.route('/data')
            .get(this.controller.getAllData)
            .post(this.controller.postNewData);

        app.route('/dataById')
            .post(this.controller.getDataById)
            .put(this.controller.putDataById)
            .delete(this.controller.deleteDataById);
    }
}