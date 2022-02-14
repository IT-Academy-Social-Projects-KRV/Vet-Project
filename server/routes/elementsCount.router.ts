import { Router } from 'express'
import db from '../db'


const router = Router()

  router.get('', async function getAmount(req, res) {
    try {
      const petsCount = await db.query(`SELECT count(*) FROM animals`)
      const vetsCount = await db.query(`SELECT count(*) FROM vetlist`)
      const volonteersCount = await db.query(`SELECT count(*) FROM volonteers`)
      const [{count:petsNumber}] = petsCount.rows
      const [{count:vetsNumber}] = vetsCount.rows
      const [{count:volunteersNumber}]= volonteersCount.rows
      res.json({
        pets: Number(petsNumber),
        vets: Number(vetsNumber),
        volonteers: Number(volunteersNumber)
      })
  } catch (err) {
      console.error(err)
      res.status(500).send(err)
  }
})

export default router
