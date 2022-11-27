import EditRecipeCell from 'src/components/Admin/Recipe/EditRecipeCell'

type RecipePageProps = {
  id: number
}

const EditRecipePage = ({ id }: RecipePageProps) => {
  return <EditRecipeCell id={id} />
}

export default EditRecipePage
