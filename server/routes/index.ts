import { Router } from 'express'
import vetRouter from './vet.router'
import servicesRouter from './services.router'
import vetServicesRouter from './vetservices.router'
import animalsRouter from './animals.router'
import animalFilterRouter from './filter.services'
import loginRouter from './login.router'
import volonteersRouter from './volonteers.router'

const router = Router()

router.use('/vet/', vetRouter)
router.use('/services/', servicesRouter)
router.use('/vetservices/', vetServicesRouter)
router.use('/animals/', animalsRouter)
router.use('/animals/filter/',animalFilterRouter)
router.use('/login/', loginRouter)
router.use('/volonteers/',volonteersRouter)

export default router
