const typeDefs = `
  type Query {
    me: User
    users: [User]
    games(username: String!): User
  }

  type User {
    _id: ID
    username: String!
    email: String!
    password: String
    games: [Game]
  }

  type Game {
    _id: ID
    rawgId: String!
    name: String!
    image: String
    rating: Float
  }

  type Auth {
    token: ID!
    user: User
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addGame(rawgId: String!, name: String!, image: String, rating: Float): User

    removeGame(_id: String!): User
    removeUser(_id: String!): User

    addGameDEV(_id: String!, rawgId: String!, name: String!, image: String, rating: Float): User
    removeGameDEV(_id: String!, userId: String!): User
    removeUserDEV(_id: String!): User
  }
`;

module.exports = typeDefs;