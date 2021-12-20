import {Router} from 'express'
import vetRouter from './vet.router'
import servicesRouter from './services.router'
import vetServicesRouter from './vetservices.router'
import animalsRouter from './animals.router'


const router = Router()

router.use('/vet/', vetRouter)
router.use('/services/', servicesRouter)
router.use('/vetservices/', vetServicesRouter)
router.use('/animals/', animalsRouter)

export default router

