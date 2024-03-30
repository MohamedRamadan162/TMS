import { log } from 'console';
import mysql from 'mysql2';

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
});

export default async function handler(req, res) {
    if (req.method !== 'GET') {
        return res.status(405).json();
    }
    try {
        const [tasks] = await db.promise().execute('SELECT * FROM tasks');
        return res.status(200).json(tasks);


    } catch (error) {
        console.error('Error:', error);
        return res.status(500).json({ message: 'Internal Server Error' });
    }

}
