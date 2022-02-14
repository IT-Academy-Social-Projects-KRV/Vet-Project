import { Router} from 'express'
import db from '../db'
import * as bcrypt from 'bcryptjs'
import * as jwt from 'jsonwebtoken'

const router = Router()

router.post ('/', async function login(req, res){
	const tokenKey = 'dev-jwt'
	
	try { 
		const candidate = await db.query (`SELECT * FROM users`)
		const [{id:id, email:storedEmail, password:storedPassword}] = candidate.rows	
		if (storedEmail == req.body.email) {
			const passwordResult:boolean = bcrypt.compareSync(req.body.password, storedPassword)		
			if (passwordResult) {
				const token = jwt.sign({
					email: storedEmail,
					id : id
				}, tokenKey, {expiresIn: 60 * 60})
				res.status(200).json({
					token: `Bearer ${token}`
				})
			} else {
				res.status(401).json({
					message: '�� ��������� ������ ���'
				})
			}
		} else {
			res.status(404).json({
				message: `�� ��������� ������ ���`
			})
		}
	} catch {
		res.status(500)
	} 
})

export default router;
