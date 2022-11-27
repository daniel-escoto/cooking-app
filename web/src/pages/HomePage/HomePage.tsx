import { useAuth } from '@redwoodjs/auth'
import { routes, Link } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const HomePageButtons = () => {
  const { isAuthenticated, logOut } = useAuth()

  if (isAuthenticated) {
    return (
      <div className="space-x-4">
        <Link
          to={routes.recipes()}
          className="inline-flex items-center justify-center rounded-md border border-transparent bg-amber-600 px-5 py-3 text-base font-medium text-white shadow-sm hover:bg-amber-700"
        >
          See Recipes
        </Link>
        <button
          onClick={logOut}
          className="inline-flex items-center justify-center rounded-md border border-transparent bg-amber-600 px-5 py-3 text-base font-medium text-white shadow-sm hover:bg-amber-700"
        >
          Log Out
        </button>
      </div>
    )
  } else {
    return (
      <div className="space-x-4">
        <Link
          to={routes.login()}
          className="inline-flex items-center justify-center rounded-md border border-transparent bg-amber-600 px-5 py-3 text-base font-medium text-white shadow-sm hover:bg-amber-700"
        >
          Log In
        </Link>
        <Link
          to={routes.signup()}
          className="inline-flex items-center justify-center rounded-md border border-transparent bg-amber-600 px-5 py-3 text-base font-medium text-white shadow-sm hover:bg-amber-700"
        >
          Sign Up
        </Link>
      </div>
    )
  }
}

const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />

      <h1 className="text-center text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
        <span className="block xl:inline">Welcome to</span>{' '}
        <span className="block text-amber-600 xl:inline">Cooking-App</span>
      </h1>
      <div className="mt-8 flex justify-center space-x-4">
        <HomePageButtons />
      </div>
    </>
  )
}

export default HomePage
