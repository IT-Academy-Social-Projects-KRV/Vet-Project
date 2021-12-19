import {Router} from 'express'
import vetRouter from './vet.router'

const router = Router()

router.use('/vet/', vetRouter)

export default router

