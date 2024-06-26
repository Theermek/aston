const NotFoundPage = () => {
  return (
    <div>
      <section className="bg-white dark:bg-gray-900 ">
        <div className="container min-h-screen px-6 py-12 mx-auto flex items-center gap-12">
          <div className="w-1/2">
            <p className="text-sm font-medium text-blue-500 dark:text-blue-400">404 error</p>
            <h1 className="mt-3 font-medium text-gray-800 dark:text-white text-3xl">Page not found</h1>
            <p className="mt-4 text-lg text-gray-500 dark:text-gray-400">
              Sorry, the page you are looking for does not exist. Here are some helpful links:
            </p>

            <div className="flex items-center mt-6 gap-x-3">
              <button className="w-1/2 px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200 bg-blue-500 rounded-lg shrink-0 sm:w-auto hover:bg-blue-600 dark:hover:bg-blue-500 dark:bg-blue-600">
                Home
              </button>
            </div>
          </div>

          <div className="relative">
            <img
              className="w-full max-w-lg mx-auto"
              src="https://merakiui.com/images/components/illustration.svg"
              alt=""
            />
          </div>
        </div>
      </section>
    </div>
  )
}

export default NotFoundPage
