import { MetaTags } from '@redwoodjs/web'

const CREATE_RECIPE_MUTATION = gql`
  mutation CreateRecipeMutation($input: CreateRecipeInput!) {
    createRecipe(input: $input) {
      id
    }
  }
`

interface FormValues {
  title: string
  description: string
}

const CreateRecipePage = () => {
  return (
    <>
      <MetaTags title="CreateRecipe" description="CreateRecipe page" />
    </>
  )
}

export default CreateRecipePage
