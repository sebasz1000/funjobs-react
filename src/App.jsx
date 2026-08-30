import { useEffect, useState } from "react"
import { Footer } from "./components/Footer"
import { Form } from "./components/Form"
import { Header } from "./components/Header"
import { Pagination } from "./components/Pagination"
import { JobsList } from "./components/JobsList"


function App() {

  const [jobs, setJobs] = useState([])

  useEffect(() => {
    fetch("./data.json")
      .then(res => res.json())
      .then(setJobs)
  }, [])


  return (
    <>
      <Header />
      <main>
        <section className="jobs-search">
          <h1>Encuentra tu próximo trabajo</h1>
          <p>Explora miles de oportunidades en el sector tecnológico.</p>
          <Form />
        </section>
        <section>
          <h2>Resultados de búsqueda</h2>
          <div className="jobs-listings">
            <JobsList jobs={jobs} />
          </div>

          <Pagination />
        </section>
      </main>
      <Footer />
    </>
  )
}

export default App
