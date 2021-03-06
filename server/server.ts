import dotenv from 'dotenv'
dotenv.config()

import express from 'express'
import cors from 'cors'

import routes from './routes/index'

const port = Number(process.env.PORT) || 3200
const app = express()

app.use(cors())
app.use(express.json())

app.use('/api', routes)

app.listen(port, () =>
	console.log(`Server started on port ${port}`)
)
