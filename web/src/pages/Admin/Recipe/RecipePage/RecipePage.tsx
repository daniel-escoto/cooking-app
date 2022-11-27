import RecipeCell from 'src/components/Admin/Recipe/RecipeCell'

type RecipePageProps = {
  id: number
}

const RecipePage = ({ id }: RecipePageProps) => {
  return <RecipeCell id={id} />
}

export default RecipePage
