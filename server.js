// Depencies
const firebase = require('./config/firebase')
const express = require('express')
const graphqlHTTP = require('express-graphql')
const schema = require('./schema/schema')

const root = { hello: () => 'Hello world!' }

const app = express()

app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true
}))

app.listen(4000, () => console.log('Now browse to localhost:4000/graphql'))
