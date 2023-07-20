import express, { Router } from 'express'
import serverless from 'serverless-http'
import { handleReminder } from '../../server/controller'

const api = express()

const router = Router()

router.get('/sendReminder', (req, res) => {

    console.log("HIT JIT")
    handleReminder()

})

api.use('/api/', router)

export const handler = serverless(api)