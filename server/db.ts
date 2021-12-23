import { Pool } from "pg";

const pool = new Pool({
  host: "35.192.62.96",
  user: "user",
  database: "Vet",
  password: "admin",
});

export default pool;
