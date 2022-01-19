import { Router, Request} from 'express'
import db from '../db'
import { ILoginItem } from '../interfaces';


const router = Router();

router.get ('/', async function getUser (req, res) {
	 const email = req.query.login;
	// console.log(email)
	 const password = req.query.password;

	try {
		const animalsList = await db.query(
			`SELECT * FROM users WHERE email = $1 AND password = $2`,[email, password]
		)
		res.json(animalsList.rows)
	} catch (err) {
		console.error(err)
		res.status(500).send(err)
	}

})	

	



export default router
