import { Router, Request } from 'express'
import db from '../db'

const router = Router()

export interface IVolonteersItem {
	id: number
	name: string
	age: number
    detailInfo: string
    contacts: string
}

router.post(
	'/',
	async function addVolonteer(
		req: Request<{}, {}, IVolonteersItem>,
		res
	) {
		try {
			const {
				id,
				name,
				age,
				detailInfo,
				contacts
			} = req.body

			const newVolonteer =
				await db.query<IVolonteersItem>(
					`
                INSERT INTO volonteerlist (id, name, age, detailInfo, contacts) 
                VALUES ($1, $2, $3, $4, $5) 
                RETURNING *`,
					[
						id,
						name,
						age,
						detailInfo,
						contacts
					]
				)

			res.send(newVolonteer.rows[0])
		} catch (err) {
			res.status(500).send(err)
			console.error(err)
		}
	}
)

router.get('/', async function getVolonteerslist(req, res) {
	try {
		const volonteersList = await db.query(
			`SELECT * FROM volonteerslist`
		)
		res.json(volonteersList.rows)
	} catch (err) {
		console.error(err)
		res.status(500).send(err)
	}
})

router.get(
	'/:id(\\d+)',
	async function getVolonteerById(req, res) {
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
					`SELECT * FROM volonteerslist WHERE id = $1`,
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
	async function updateVolonteersById(
		req: Request<
			{ id: string },
			{},
			IVolonteersItem
		>,
		res
	) {
		try {
			const id = parseInt(
				req.params.id
			)

			const {
				name,
				detailInfo,
				age,
				contacts
			} = req.body

			const updateVolonteer =
				await db.query(
					`
                UPDATE volonteerslist 
                SET name = $2, detailInfo = $3, age = $4, contacts = $5 
                WHERE id = $6
                RETURNING *`,
					[
						name,
						detailInfo,
						age,
						contacts,
						id
					]
				)
			res.json(updateVolonteer.rows[0])
		} catch (err) {
			res.status(500).send(err)
			console.error(err)
		}
	}
)

router.delete(
	'/:id(\\d+)',
	async function deleteVolonteerById(req, res) {
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
			const deleteVolonteer =
				await db.query(
					`
        DELETE FROM volonteerslist  
         WHERE id = $1`,
					[id]
				)

			res.json(deleteVolonteer.rows)
		} catch (err) {
			res.status(500).send(err)
			console.error(err)
		}
	}
)

export default router
