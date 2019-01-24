const { buildSchema } = require('graphql')

const schema = buildSchema(`
type Query {
  getTeams : [team]
}
type Mutation {
  initiate(
    sequence: Int
    phoneNumber : String
    sessionId : String
    operator : String
    message : String
    clientState : String
    type: String
  ) : [String]
  
  vote (
    sequence: Int
    phoneNumber : String
    sessionId : String
    serviceCode : String
    operator : String
    message : String
    type: String
  ) : [String]
}
type team {
  _id: String
  number: Int
  votes: Int
  
}
`)

module.exports = schema
