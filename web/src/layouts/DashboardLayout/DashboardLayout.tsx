import NavBar from 'src/components/NavBar/NavBar'

type DashboardLayoutProps = {
  children?: React.ReactNode
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  return (
    <>
      <NavBar />
      <main className="flex h-screen w-full flex-col items-center justify-center bg-white dark:bg-gray-900 dark:text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto flex min-h-screen max-w-7xl flex-col items-center px-4 py-8 sm:px-6 lg:px-8">
            {children}
          </div>
        </div>
      </main>
    </>
  )
}

export default DashboardLayout
