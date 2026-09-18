import { HomePage } from "./pages/HomePage"
import { Header } from "./components/Header"
import { Footer } from "./components/Footer"
import SearchPage from "./pages/SearchPage"
import { NotFoundPage } from "./pages/404"
import { Route } from "./components/Route"


function App() {

  return (
    <>
      <Header />
      <Route path="/" component={<HomePage />} />
      <Route path="/search" component={<SearchPage />} />
      <Route path="/*" component={<NotFoundPage />} />
      <Footer />
    </>
  )
}

export default App

// ! 8:47:20  --> las minute seen https://www.youtube.com/watch?v=mXpWhmJXV0o