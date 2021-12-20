import { Router, Request } from 'express'
import db from '../db'

const router = Router()

export interface IBareAnimalItem {
    name: string
    gender: string
    breed: string
    years:string
}

export interface IAnimalItem extends IBareAnimalItem {
    id: number
}


router.post('/', async function addAnimal(req: Request<{}, {}, IBareAnimalItem>, res) {
    try {
        const { name,gender,breed,years } = req.body

        const newService = await db.query<IAnimalItem>(`
                INSERT INTO animals (name,gender,breed,years) 
                VALUES ($1, $2,$3,$4) 
                RETURNING *`,
            [name,gender,breed,years]
        );

        res.send(newService.rows[0])
    } catch (err) {
        res.status(500).send(err)
        console.error(err);
    }
})

router.get('/', async function getAllAnimals(req, res) {
    try {
        const animalsList = await db.query(`SELECT * FROM animals`)
        res.json(animalsList.rows)
    } catch (err) {
        console.error(err)
        res.status(500).send(err)
    }
})

router.get('/:id', async function getAnimalById(req, res) {
    const id = parseInt(req.params.id)

    if (!(id >= 1)) {
        res.status(400).send(new Error('Invalid id'))
        return
    }

    try {
        const id = req.params.id
        const animal = await db.query('SELECT * FROM animals where id = $1', [id])
        res.json(animal.rows[0])
    } catch (err) {
        res.status(500).send(err);
        console.error(err);
    }
})

router.put('/:id', async function updateAnimalInfoById(req: Request<{id: string}, {}, IAnimalItem>, res) {
    try {
        const { name,gender,breed,years, id} = req.body

        const updateAnimal = await db.query(`
                UPDATE animals 
                SET name = $1, gender = $2, breed = $3, years = $4 
                WHERE id = $5
                RETURNING *`, [ name,gender,breed,years, id]
        )
        res.json(updateAnimal.rows[0])
    } catch (err) {
        res.status(500).send(err)
        console.error(err)
    }
})

router.delete('/:id(\\d+)', async function deleteAnimalById(req, res) {
    const id = req.params.id

    try {
        const deletedAnimal = await db.query(`
                DELETE FROM animals  
                WHERE id = $1`, [id])
        res.json(deletedAnimal.rows)
    } catch (err) {
        res.status(500).send(err)
        console.error(err)
    }
})







export default router;