const schema = buildSchema(`
type Query {
  getEvents : [Events!]!
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

  createEvent ( event:eventInput) : Event!
  

}
type Events {
  _id: ID!
  title: String!
  description : String!
  fee : Float!
  location : String!
  
}

input eventInput {
  title : String!
  description : String!
  fee : Float!
  location : String!
}

`)

module.exports = schema
