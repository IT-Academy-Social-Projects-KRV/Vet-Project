import { Pool } from "pg";

const pool = new Pool({
  host: "localhost",
  user: "postgres",
  database: "postgres",
  password: "explain",
});

export default pool;
