import { HomePage } from "./pages/HomePage"
import { Header } from "./components/Header"
import { Footer } from "./components/Footer"
import SearchPage from "./pages/SearchPage"
import { NotFoundPage } from "./pages/404"
import { useEffect, useState } from "react"




function App() {

  const [currentPath, setCurrentPath] = useState(window.location.pathname)
  let page = <HomePage />

  useEffect(() => {

    const handlePathChange = (e) => setCurrentPath(window.location.pathname)

    window.addEventListener("popstate", handlePathChange)


    return () => window.removeEventListener("popstate", handlePathChange)
  }, [])

  if (currentPath === "/") {
    page = <HomePage />
  } else if (currentPath === "/search") {
    page = <SearchPage />
  } else {
    page = <NotFoundPage />
  }

  return (
    <>
      <Header />
      {page}
      <Footer />
    </>
  )
}

export default App

/** 8:06 :22 */