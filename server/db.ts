import { Pool } from 'pg'

const pool = new Pool({
    host: 'localhost',
    user: 'postgres',
    database: 'postgres',
    password: 'example',
});

export default pool;
