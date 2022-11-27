export const schema = gql`
  type Ingredient {
    id: Int!
    name: String!
    quantity: String!
    measure: String!
    recipeId: Int!
    recipe: Recipe!
  }

  type Query {
    ingredients: [Ingredient!]! @requireAuth
    ingredient(id: Int!): Ingredient @requireAuth
  }

  input CreateIngredientInput {
    name: String!
    quantity: String!
    measure: String!
    recipeId: Int!
  }

  input UpdateIngredientInput {
    name: String
    quantity: String
    measure: String
    recipeId: Int
  }

  type Mutation {
    createIngredient(input: CreateIngredientInput!): Ingredient! @requireAuth
    updateIngredient(id: Int!, input: UpdateIngredientInput!): Ingredient!
      @requireAuth
    deleteIngredient(id: Int!): Ingredient! @requireAuth
  }
`
