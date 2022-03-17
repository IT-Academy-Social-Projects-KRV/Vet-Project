import { Router, Request } from 'express'
import db from '../db'

import { IBareVetItem, IVetItem } from "../interfaces/vet-item"


const router = Router()

router.post(
	'/',
	async function addVetClinic(
		req: Request<{}, {}, IBareVetItem>,
		res
	) {
		try {
			const {
				image,
				title,
				adress,
				phone,
				email,
				map_link
			} = req.body

			const newVetclinic =
				await db.query<IVetItem>(
					`
                INSERT INTO vetlist (iamge, title, adress, phone, email, map_link) 
                VALUES ($1, $2, $3, $4, $5, $6) 
                RETURNING *`,
					[
						image,
						title,
						adress,
						phone,
						email,
						map_link
					]
				)
			const [addedClinic] = newVetclinic.rows
			res.send(addedClinic)
		} catch (err) {
			res.status(500).send(err)
			console.error(err)
		}
	}
)

router.get('/', async function getVetlist(req, res) {
	try {
		const vetList = await db.query(
			`SELECT * FROM vetlist`
		)
		res.json(vetList.rows)
	} catch (err) {
		console.error(err)
		res.status(500).send(err)
	}
})

router.get(
	'/:id(\\d+)',
	async function getVetClinicById(req, res) {
		const id = parseInt(req.params.id)

		if (!(id >= 1)) {
			res.status(400).send(
				new Error(
					'Invalid id'
				)
			)
			return
		}

		try {
			const { rows } =
				await db.query(
					`SELECT * FROM vetlist WHERE id = $1`,
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
	'/',
	async function updateVetClinicById(
		req: Request<
			{},
			{},
			IVetItem
		>,
		res
	) {
		try {
			const {
				image,
				title,
				adress,
				phone,
				email,
				map_link,
				id
			} = req.body

			const updateClinic =
				await db.query(
					`
                UPDATE vetlist 
                SET image = $1, title = $2, adress = $3, phone = $4, email = $5, map_link = $6 
                WHERE id = $7
                RETURNING *`,
					[
						image,
						title,
						adress,
						phone,
						email,
						map_link,
						id
					]
				)
				const [updatedClinic] = updateClinic.rows
			res.json(updatedClinic)
		} catch (err) {
			res.status(500).send(err)
			console.error(err)
		}
	}
)

router.delete(
	'/:id(\\d+)',
	async function deleteVetClinicById(req, res) {
		const id = parseInt(req.params.id)

		if (id < 1) {
			res.status(400).send(
				new Error(
					'Invalid id'
				)
			)
			return
		}

		try {
			const deleteClinic =
				await db.query(
					`
        DELETE FROM vetlist  
         WHERE id = $1`,
					[id]
				)

			res.json(deleteClinic.rows)
		} catch (err) {
			res.status(500).send(err)
			console.error(err)
		}
	}
)

export default router
