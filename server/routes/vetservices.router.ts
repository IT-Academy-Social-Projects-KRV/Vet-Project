import { Router } from 'express'
import db from '../db'

const router = Router()

router.post('/', async function addServiceToVet(req, res) {
	try {
		const vet_id = parseInt(req.body.vet_id)
		const service_id = parseInt(
			req.body.service_id
		)

		const newServiceToClinic =
			await db.query(
				`
                INSERT INTO vetlist_services (vet_id, service_id) 
                VALUES ($1, $2) 
                RETURNING *`,
				[vet_id, service_id]
			)
		const [addedService] = newServiceToClinic.rows
		res.send(addedService)
	} catch (err) {
		res.status(500).send(err)
		console.error(err)
	}
})

export default router
