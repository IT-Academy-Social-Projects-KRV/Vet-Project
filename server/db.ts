import { Pool } from 'pg'

const pool = new Pool({
    host: 'localhost',
    user: 'postgres',
    database: 'Vet',
    password: 'example',
});

export default pool;
