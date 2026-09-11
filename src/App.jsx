import { HomePage } from "./pages/HomePage"
import { Header } from "./components/Header"
import { Footer } from "./components/Footer"
import SearchPage from "./pages/SearchPage"
import { NotFoundPage } from "./pages/404"
import { useRouter } from "./hooks/useRouter"


function App() {

  const { currentPath } = useRouter()
  let page = <HomePage />

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