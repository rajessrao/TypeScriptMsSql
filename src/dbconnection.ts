import { ConnectionPool } from 'mssql';

export const dbConnection = (poolConfig: any): Promise<ConnectionPool> => {
    const promise = new ConnectionPool(poolConfig);

    return promise.connect().then(pool => {
        return pool;
    });
}

export default dbConnection;