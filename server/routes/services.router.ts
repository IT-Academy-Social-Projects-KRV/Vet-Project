import { Router, Request } from 'express'
import db from '../db'

import { IBareServiceItem } from '../interfaces/bare-service-item'
import { IServiceItem } from '../interfaces/service-item'


const router = Router()

router.post(
  '/',
  async function addService(
    req: Request<{}, {}, IBareServiceItem>,
    res
  ) {
    try {
      const { title, description } = req.body

      const newService = await db.query<IServiceItem>(
        `
                INSERT INTO services (title, description) 
                VALUES ($1, $2) 
                RETURNING *`,
        [title, description]
      )

      res.send(newService.rows[0])
    } catch (err) {
      res.status(500).send(err)
      console.error(err)
    }
  }
)

router.get('/', async function getAllServices(req, res) {
  try {
    const servicesList = await db.query(
      `SELECT * FROM services`
    )
    res.json(servicesList.rows)
  } catch (err) {
    console.error(err)
    res.status(500).send(err)
  }
})

router.get(
  '/:id(\\d+)',
  async function getServicesByClinicId(req, res) {
    const id = parseInt(req.params.id)

    if (!(id >= 1)) {
      res.status(400).send(new Error('Invalid id'))
      return
    }

    try {
      const { rows } = await db.query(
        `SELECT s.title, s.description
                            FROM services AS s
                            INNER JOIN vetlist_services AS vs ON vs.service_id = s.id
                            INNER JOIN vetlist AS v ON vs.vet_id = v.id
                            WHERE
                            v.id = $1`,
        [id]
      )
      res.send(rows)
    } catch (err) {
      res.status(500).send(err)
      console.error(err)
    }
  }
)

router.put(
  '/:id(\\d+)',
  async function updateServiceById(
    req: Request<{ id: string }, {}, IServiceItem>,
    res
  ) {
    try {
      const { title, description, id } = req.body

      const updateClinic = await db.query(
        `
                UPDATE services 
                SET title = $1, description = $2 
                WHERE id = $3
                RETURNING *`,
        [title, description, id]
      )
      res.json(updateClinic.rows[0])
    } catch (err) {
      res.status(500).send(err)
      console.error(err)
    }
  }
)

router.delete(
  '/:id(\\d+)',
  async function deleteServiceById(req, res) {
    const id = parseInt(req.params.id)

    if (!(id >= 1)) {
      res.status(400).send(new Error('Invalid id'))
      return
    }

    try {
      const deleteService = await db.query(
        `
                DELETE FROM services  
                WHERE id = $1`,
        [id]
      )
      res.json(deleteService.rows)
    } catch (err) {
      res.status(500).send(err)
      console.error(err)
    }
  }
)

export default router
