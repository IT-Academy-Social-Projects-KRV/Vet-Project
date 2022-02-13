import { Router } from 'express'
import db from '../db'


const router = Router()


// router.get('', async function getAmount(req, res) {
//   try {
//     const petsCount = await db.query(`SELECT count(*) FROM animals`)
//     const vetsCount = await db.query(`SELECT count(*) FROM vetlist`)
//     const volonteersCount = await db.query(`SELECT count(*) FROM volonteers`)
//     console.log(volonteersCount.rows)
//     res.json({
//       pets: +petsCount.rows[0].count,
//       vets: +vetsCount.rows[0].count,
//       volonteers: +volonteersCount.rows[0].count
//     })
//   } catch (err) {
//     console.error(err)
//     res.status(500).send(err)
//   }
// })

  router.get('', async function getAmount(req, res) {
    try {
      const petsCount = await db.query(`SELECT count(*) FROM animals`)
      const vetsCount = await db.query(`SELECT count(*) FROM vetlist`)
      const volonteersCount = await db.query(`SELECT count(*) FROM volonteers`)
      const [pets] = petsCount.rows
      const [vets] = vetsCount.rows
      const [volunteers]= volonteersCount.rows
      const {count:petsNumber} = pets
      const {count:vetsNumber} = vets
      const {count:volunteersNumber} = volunteers
      res.json({
        pets: +petsNumber,
        vets: +vetsNumber,
        volonteers: +volunteersNumber
      })
  } catch (err) {
      console.error(err)
      res.status(500).send(err)
  }
})



export default router
