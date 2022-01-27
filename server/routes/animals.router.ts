import { Router, Request } from 'express'
import db from '../db'

import { IBareAnimalItem, IAnimalItem } from "../interfaces/animal-item"


const router = Router()

router.post(
  '/',
  async function addAnimal(
    req: Request<{}, {}, IBareAnimalItem>,
    res
  ) {
    try {
      const {
        name,
        gender,
        breed,
        age,
        shelter_name,
        curator,
        short_info,
        behavioral_features,
        wishes_for_shelter
      } = req.body
      const newAnimal = await db.query<IAnimalItem>(
        `
                INSERT INTO animals (name,gender,breed,age,shelter_name,curator,
                short_info,behavioral_features,wishes_for_shelter) 
                VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9) 
                RETURNING *`,
        [
          name,
          gender,
          breed,
          age,
          shelter_name,
          curator,
          short_info,
          behavioral_features,
          wishes_for_shelter
        ]
      )

      res.send(newAnimal.rows[0])
    } catch (err) {
      res.status(500).send(err)
      console.error(err)
    }
  }
)

router.get('/', async function getAllAnimals(req, res) {
  try {
    const animalsList = await db.query(
      `SELECT * FROM animals`
    )
    res.json(animalsList.rows)
  } catch (err) {
    console.error(err)
    res.status(500).send(err)
  }
})

router.get('/:id', async function getAnimalById(req, res) {
  const id = parseInt(req.params.id)

  if (id < 1) {
    res.status(400).send(new Error('Invalid id'))
    return
  }

  try {
    const id = req.params.id
    const animal = await db.query(
      'SELECT * FROM animals where id = $1',
      [id]
    )
    res.json(animal.rows[0])
  } catch (err) {
    res.status(500).send(err)
    console.error(err)
  }
})
router.put(
  '/',
  async function updateAnimalInfoById(
    req: Request<{}, {}, IAnimalItem>,
    res
  ) {
    try {
      const {
        name,
        gender,
        breed,
        age,
        shelter_name,
        curator,
        short_info,
        behavioral_features,
        wishes_for_shelter,
        id
      } = req.body

      const updateAnimal = await db.query(
        `
                UPDATE animals 
                SET name = $1, gender = $2, breed = $3, age = $4, shelter_name = $5, curator = $6,
                short_info = $7, behavioral_features = $8, wishes_for_shelter = $9
                WHERE id = $10
                RETURNING *`,
        [
          name,
          gender,
          breed,
          age,
          shelter_name,
          curator,
          short_info,
          behavioral_features,
          wishes_for_shelter,
          id
        ]
      )
      res.json(updateAnimal.rows[0])
    } catch (err) {
      res.status(500).send(err)
      console.error(err)
    }
  }
)

router.delete(
  '/:id(\\d+)',
  async function deleteAnimalById(req, res) {
    const id = req.params.id

    try {
      const deletedAnimal = await db.query(
        `
                DELETE FROM animals  
                WHERE id = $1`,
        [id]
      )
      res.json(deletedAnimal.rows)
    } catch (err) {
      res.status(500).send(err)
      console.error(err)
    }
  }
)




export default router
