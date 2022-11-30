export const schema = gql`
  type Recipe {
    id: Int!
    title: String!
    description: String!
    image: String!
    ingredients: [String]!
    steps: [String]!
    userId: Int!
    user: User!
  }

  type Query {
    recipes: [Recipe!]! @requireAuth
    recipe(id: Int!): Recipe @requireAuth
  }

  input CreateRecipeInput {
    title: String!
    description: String!
    image: String!
    ingredients: [String]!
    steps: [String]!
    userId: Int!
  }

  input UpdateRecipeInput {
    title: String
    description: String
    image: String
    ingredients: [String]!
    steps: [String]!
    userId: Int
  }

  type Mutation {
    createRecipe(input: CreateRecipeInput!): Recipe! @requireAuth
    updateRecipe(id: Int!, input: UpdateRecipeInput!): Recipe! @requireAuth
    deleteRecipe(id: Int!): Recipe! @requireAuth
  }
`
