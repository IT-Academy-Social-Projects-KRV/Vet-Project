import { Router, Request } from "express";
import db from "../db";

const router = Router();

export interface IBareVetItem {
  title: string;
  adress: string;
  phone: string;
  email: string;
  map_link: string;
}

export interface IVetItem extends IBareVetItem {
  id: number;
}

router.post(
  "/",
  async function addVetClinic(req: Request<{}, {}, IBareVetItem>, res) {
    try {
      const { title, adress, phone, email, map_link } = req.body;

      const newVetclinic = await db.query<IVetItem>(
        `
                INSERT INTO vetlist (title, adress, phone, email, map_link) 
                VALUES ($1, $2, $3, $4, $5) 
                RETURNING *`,
        [title, adress, phone, email, map_link]
      );

      res.send(newVetclinic.rows[0]);
    } catch (err) {
      res.status(500).send(err);
      console.error(err);
    }
  }
);

router.get("/", async function getVetlist(req, res) {
  try {
    const vetList = await db.query(`SELECT * FROM vetlist`);
    res.json(vetList.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send(err);
  }
});

router.get("/:id(\\d+)", async function getVetClinicById(req, res) {
  const id = parseInt(req.params.id);

  if (!(id >= 1)) {
    res.status(400).send(new Error("Invalid id"));
    return;
  }

  try {
    const { rows } = await db.query(`SELECT * FROM vetlist WHERE id = $1`, [
      id,
    ]);
    res.send(rows);
  } catch (err) {
    res.status(500).send(err);
    console.error(err);
  }
});

router.put(
  "/:id(\\d+)",
  async function updateVetClinicById(
    req: Request<{ id: string }, {}, IVetItem>,
    res
  ) {
    try {
      const id = parseInt(req.params.id);

      const { title, adress, phone, email, map_link } = req.body;

      const updateClinic = await db.query(
        `
                UPDATE vetlist 
                SET title = $1, adress = $2, phone = $3, email = 4, map_link = 5 
                WHERE id = $6
                RETURNING *`,
        [title, adress, phone, email, map_link, id]
      );
      res.json(updateClinic.rows[0]);
    } catch (err) {
      res.status(500).send(err);
      console.error(err);
    }
  }
);

router.delete("/:id(\\d+)", async function deleteVetClinicById(req, res) {
  const id = parseInt(req.params.id);

  if (id < 1) {
    res.status(400).send(new Error("Invalid id"));
    return;
  }

  try {
    const deleteClinic = await db.query(
      `
                DELETE FROM vetlist  
                WHERE id = $1`,
      [id]
    );

    res.json(deleteClinic.rows);
  } catch (err) {
    res.status(500).send(err);
    console.error(err);
  }
});

export default router;
