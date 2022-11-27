// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Set, Router, Route } from '@redwoodjs/router'

import ScaffoldLayout from 'src/layouts/ScaffoldLayout'

const Routes = () => {
  return (
    <Router>
      <Set wrap={ScaffoldLayout} title="Recipes" titleTo="adminRecipes" buttonLabel="New Recipe" buttonTo="adminNewRecipe">
        <Route path="/admin/recipes/new" page={AdminRecipeNewRecipePage} name="adminNewRecipe" />
        <Route path="/admin/recipes/{id:Int}/edit" page={AdminRecipeEditRecipePage} name="adminEditRecipe" />
        <Route path="/admin/recipes/{id:Int}" page={AdminRecipeRecipePage} name="adminRecipe" />
        <Route path="/admin/recipes" page={AdminRecipeRecipesPage} name="adminRecipes" />
      </Set>
      <Route path="/recipes" page={RecipesPage} name="recipes" />
      <Route path="/" page={HomePage} name="home" />
      <Route path="/login" page={LoginPage} name="login" />
      <Route path="/signup" page={SignupPage} name="signup" />
      <Route path="/forgot-password" page={ForgotPasswordPage} name="forgotPassword" />
      <Route path="/reset-password" page={ResetPasswordPage} name="resetPassword" />
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
