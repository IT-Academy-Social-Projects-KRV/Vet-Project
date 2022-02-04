import { Router, Request} from "express"
import  db  from '../db'
import { IBareVolunteer, IVolunteer } from "../interfaces/volunteers"
const router = Router()

export default router

router.post('/', async function addVolunteer (
	req: Request<{}, {}, IBareVolunteer>,
	res
	) { 
		try{
		const {
			  first_name,
			  last_name,
			  email,
			  number
			} = req.body
			const newVolunteer = await db.query<IVolunteer> (
				`INSERT INTO volonteers (first_name, last_name, email, number)
				VALUES ($1,$2,$3,$4) RETURNING *`, 
				[
					first_name,
					last_name,
					email,
					number			
				]
				)
				res.json(newVolunteer.rows[0])
		} catch( err){ 
			res.status(500).send(err)
      		console.error(err)
		}

	
})

router.get('/', async function getAllVolunteers (req, res) {
	try {
	  const Volunteers = await db.query(
		`SELECT * FROM volonteers`
	  )
	  res.json(Volunteers.rows)
	} catch (err) {
	  console.error(err)
	  res.status(500).send(err)
	}
  })

router.get('/:id', async function getVolunteerById(req,res) {
	const id = parseInt(req.params.id)

	if ( id < 1 ) {
		res.status(400).send(new Error('Invalid id'))
		return
	}

	try{
		const id = req.params.id
		const volunteer = await db.query (
			`SELECT * FROM volonteers WHERE id = $1`, [id]
		)
		res.json(volunteer.rows[0])

	} catch (err) { 
		res.status(500).send(err)
    	console.error(err)
	}
})

router.put('/', async function updateVolunteers (
	req:Request<{}, {}, IVolunteer>, 
	res) {
	try {
		
		const {
			first_name,
			last_name,
			email,
			number,
			id
		} = req.body
		  const updatedVolunteer = await db.query<IVolunteer> (
			  `UPDATE volonteers
			   set first_name = $1,
			   last_name = $2,
			   email = $3,
			   number = $4
			   WHERE id = $5
			   RETURNING *`, 
			  [
				  first_name,
				  last_name,
				  email,
				  number,
				  id				  	
			  ]
			  )
			  res.json(updatedVolunteer.rows[0])

	} catch (err)
	{
		res.status(500).send(err)
    	console.error(err)
	}
	
})

router.delete(
	'/:id(\\d+)',
	async function deleteVolunteer (req,res) {
	const id = parseInt(req.params.id)

	if ( id < 1 ) {
		res.status(400).send(new Error('Invalid id'))
		return
	}

	try{
		const id = req.params.id
		const deletedVolunteer = await db.query (
			`DELETE  FROM volonteers WHERE id = $1`, [id]
		)
		res.json(deletedVolunteer.rows[0])

	} catch (err) { 
		res.status(500).send(err)
    	console.error(err)
	}
	
}  )
