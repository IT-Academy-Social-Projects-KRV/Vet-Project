import { Pool } from "pg";

const pool = new Pool({
  host: "localhost",
  user: "postgres",
  database: "Vet",
  password: "admin",
});

export default pool;
