export const schema = gql`
  type Step {
    id: Int!
    number: Int!
    duration: Int
    description: String!
    recipeId: Int!
    recipe: Recipe!
  }

  type Query {
    steps: [Step!]! @requireAuth
    step(id: Int!): Step @requireAuth
  }

  input CreateStepInput {
    number: Int!
    duration: Int
    description: String!
    recipeId: Int!
  }

  input UpdateStepInput {
    number: Int
    duration: Int
    description: String
    recipeId: Int
  }

  type Mutation {
    createStep(input: CreateStepInput!): Step! @requireAuth
    updateStep(id: Int!, input: UpdateStepInput!): Step! @requireAuth
    deleteStep(id: Int!): Step! @requireAuth
  }
`
