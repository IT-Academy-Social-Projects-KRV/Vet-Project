import { Router} from 'express'
import db from '../db'
import * as bcrypt from 'bcryptjs'
import * as jwt from 'jsonwebtoken'


const router = Router()





router.post ('/', async function login(req, res){
	const tokenKey = 'dev-jwt'
	try { 
		const candidate = await db.query (`SELECT * FROM users`)	
		if (candidate.rows[0].email == req.body.email) {
			const passwordResult:boolean = bcrypt.compareSync(req.body.password, candidate.rows[0].password)		
			if (passwordResult) {
				const token = jwt.sign({
					email: candidate.rows[0].email,
					id : candidate.rows[0].id
				}, tokenKey, {expiresIn: 60 * 60})

				res.status(200).json({
					token: `Bearer ${token}`
				})
			} else {
				res.status(401).json({
					message: 'Не правильно введені дані'
				})
			}
		} else {
			res.status(404).json({
				message: `Не правильно введені дані`
			})
		}
	} catch {
		res.status(500)
	} 
	
})






	

	

export default router;
