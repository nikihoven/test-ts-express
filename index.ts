import express, { Express, Request, Response } from 'express';
import { pool } from './database'

const app: Express = express();

app.get('/', (req: Request, res: Response) => {
	res.send('Express + TypeScript Server');
});

app.listen(3123, () => {
	console.log(`⚡️[server]: Server is running at https://localhost:3123`);
});

pool.query('SELECT * FROM account').then(data => {
	console.log(data.rows);
})
