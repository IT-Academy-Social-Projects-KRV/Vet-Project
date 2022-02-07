import { Router } from 'express'
import db from '../db'


const router = Router()


router.get('', async function getAmount(req, res) {
  try {
    const petsCount = await db.query(`SELECT count(*) FROM animals`)
    const vetsCount = await db.query(`SELECT count(*) FROM vetlist`)
    const volonteersCount = await db.query(`SELECT count(*) FROM volonteers`)
    res.json({
      pets: +petsCount.rows[0].count,
      vets: +vetsCount.rows[0].count,
      volonteers: +volonteersCount.rows[0].count
    })
  } catch (err) {
    console.error(err)
    res.status(500).send(err)
  }
})



export default router
