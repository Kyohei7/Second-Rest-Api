const express = require ('express')
require('dotenv').config()
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))
app.use(cors())
app.use(morgan('dev'))

const userRouter = require('./src/routes/user')
app.use('/user', userRouter )

const developerRouter = require('./src/routes/developer')
app.use('/developer', developerRouter)

const companyRouter = require('./src/routes/company')
app.use('/company', companyRouter)

const hireRouter = require('./src/routes/hire')
app.use('/hire', hireRouter)

const projectRouter = require('./src/routes/project')
app.use('/project', projectRouter)

const portfolioRouter = require('./src/routes/portfolio')
app.use('/portfolio', portfolioRouter)



app.use((request, response, next)=>{
    response.header('Access-Control-Allow-Origin', '*')
    response.header('Access-Control-Allow-Headers','Origin, X-Requested-With, Content-Type, Accept, Authorization')
    next()
  })
  
  app.get('/', (_request, response) => {response.send('Muhammad Rizki')})
  
  app.listen(process.env.PORT, ()=>{
    console.log(`App Listen on Port ${process.env.PORT}!`)
  })