import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const RecipesPage = () => {
  return (
    <>
      <MetaTags title="Recipes" description="Recipes page" />

      <h1>RecipesPage</h1>
      <p>
        Find me in <code>./web/src/pages/RecipesPage/RecipesPage.tsx</code>
      </p>
      <p>
        My default route is named <code>recipes</code>, link to me with `
        <Link to={routes.recipes()}>Recipes</Link>`
      </p>
    </>
  )
}

export default RecipesPage
