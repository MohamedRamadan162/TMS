import mysql from 'mysql2';

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
});

export default async function handler(req, res) {
    if (req.method !== 'PUT') {
        return res.status(405).end();
    }

    try {
        const { id } = req.query;
        const body = req.body;
        await db.promise().execute('UPDATE tasks SET task_description = ?, task_completion_date = ? WHERE id = ?;', [body.taskDescription, body.taskDate, id]);

        return res.status(200).json({ message: 'task description updated successfully.' });

    } catch (error) {
        console.error('Error updating task description:', error);
        return res.status(500).json({ message: 'Internal server Error' });
    }
}
