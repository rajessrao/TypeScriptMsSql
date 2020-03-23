import { Request, Response } from 'express';
import { dbConnection } from './dbconnection';
import { configs } from './config';

export class Controller {

    public greet(req: Request, res: Response) {
        res.status(200).send('Hello there..');
    }

    public getAllData(req: Request, res: Response) {
        let query = `SELECT * FROM TestTable1`;
        dbConnection(configs.dbconfig).then(pool => {
            pool.query(query).then((recordSet: any) => {
                res.send(recordSet.recordset);
            }).catch((err: any) => {
                console.log(err);
            });
        }).catch(function (err: any) {
            console.log(err);
        });
    }

    public postNewData(req: Request, res: Response) {
        let query = `INSERT INTO TestTable1(FirstName, LastName, Properties) 
                     VALUES('${req.body.FirstName}', '${req.body.LastName}', '${req.body.Properties}')`
        dbConnection(configs.dbconfig).then(pool => {
            pool.query(query).then((recordSet: any) => {
                res.send(recordSet);
            }).catch((err: any) => {
                console.log(err);
            });
        }).catch(function (err: any) {
            console.log(err);
        });
    }

    public getDataById(req: Request, res: Response) {
        let query = `SELECT * FROM TestTable1 WHERE Id = ${req.body.Id}`;
        dbConnection(configs.dbconfig).then(pool => {
            pool.query(query).then((recordSet: any) => {
                res.send(recordSet.recordset);
            }).catch((err: any) => {
                console.log(err);
            });
        }).catch(function (err: any) {
            console.log(err);
        });
    }

    public putDataById(req: Request, res: Response) {
        let query = `UPDATE TestTable1 
                     SET FirstName = '${req.body.FirstName}', LastName = '${req.body.LastName}', Properties = '${req.body.Properties}' 
                     WHERE Id = ${req.body.Id}`
        dbConnection(configs.dbconfig).then(pool => {
            pool.query(query).then((recordSet: any) => {
                res.send(recordSet);
            }).catch((err: any) => {
                console.log(err);
            });
        }).catch(function (err: any) {
            console.log(err);
        });
    }

    public deleteDataById(req: Request, res: Response) {
        let query = `DELETE FROM TestTable1 WHERE Id = ${req.body.Id}`;
        dbConnection(configs.dbconfig).then(pool => {
            pool.query(query).then((recordSet: any) => {
                res.send(recordSet);
            }).catch((err: any) => {
                console.log(err);
            });
        }).catch(function (err: any) {
            console.log(err);
        });
    }
}