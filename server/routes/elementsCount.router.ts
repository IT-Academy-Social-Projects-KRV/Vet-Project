import { Router } from 'express'
import db from '../db'


const router = Router()


router.get('', async function getAmount(req, res) {
  try {
    const animalCount = await db.query(`SELECT count(*) FROM animals`)
    const petsCount = await db.query(`SELECT count(*) FROM vetlist`)
    const volonteersCount = await db.query(`SELECT count(*) FROM volonteers`)
    
    res.json([animalCount.rows[0], petsCount.rows[0], volonteersCount.rows[0]])
  } catch (err) {
    console.error(err)
    res.status(500).send(err)
  }
})


export default router
