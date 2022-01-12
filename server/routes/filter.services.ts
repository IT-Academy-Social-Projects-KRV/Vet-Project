import { Router, Request } from 'express'
import { Test } from 'tslint';
import db from '../db'

const router = Router();

export interface IFilterAtimals {
    gender : string
    breed : string
    age : string
    curator : string
}

router.get('/', async function getAllAnimals(req, res) {
   
	const gender = req.query.gender
	const breed = req.query.breed
	const age = req.query.age
	const curator = req.query.curator

	const params = [gender, breed, age, curator].filter(Boolean)



	const parametersArr = createParametersArr(req.query);
	const parametrsStr = createAllStr(parametersArr);




	
	try {
		const animalsList = await db.query(
			`SELECT * FROM animals WHERE ${parametrsStr}`, params

		)
		res.json(animalsList.rows)
	} catch (err) {
		console.error(err)
		res.status(500).send(err)
	}
})

function createParametersArr(obj) {
	const parametersArr = [];

	for (let key in obj) {
		parametersArr.push(key)
	}
	return parametersArr
	
}

function createAllStr(arr) {

	let query: string = '';
	
	for (let i = 0; i < arr.length; ++i){
	
		query += `${arr[i]} = $${i + 1}` 
		if (i !== arr.length - 1) {
			query += ` AND ` 
		}
	}
	return query
}



export default router;
