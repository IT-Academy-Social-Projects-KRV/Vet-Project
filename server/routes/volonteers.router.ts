import { Router, Request } from 'express'
import db from '../db'

import { IBereVolonteerItem, IVolonteerItem } from '../interfaces/volonteers-item'

const router = Router()

router.get('', async function getAllVoloteers(req, res) {
  try {
    const volonteersList = await db.query(
      `SELECT * FROM volonteers`
    )
    res.json(volonteersList.rows)
  } catch (err) {
    console.error(err)
    res.status(500).send(err)
  }
})

export default router