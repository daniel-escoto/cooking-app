const NavBar = () => {
  return (
    <nav className="bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold tracking-tight text-amber-900 dark:text-white">
                Cooking-App
              </h1>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
