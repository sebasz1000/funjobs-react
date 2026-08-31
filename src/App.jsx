import { useEffect, useState } from "react"
import { Footer } from "./components/Footer"
import { Form } from "./components/Form"
import { Header } from "./components/Header"
import { Pagination } from "./components/Pagination"
import { JobsList } from "./components/JobsList"
import { chunkArray } from "./utils/chunkArray"

const RESULTS_PER_PAGE = 3

const jobsMapper = (jobs) => {
  return jobs.map(job => ({
    ...job,
    isApplied: false
  }))
}
function App() {

  const [jobs, setJobs] = useState([])
  const [currentPagination, setCurrentPagination] = useState(0)

  useEffect(() => {
    fetch("./data.json")
      .then(res => res.json())
      .then(data => {
        setJobs(jobsMapper(data))
      })
  }, [])

  const handlePaginationChange = (index) => {
    setCurrentPagination(index)
  }

  const handleJobApply = (id) => {
    setJobs(prevJobs => prevJobs.map(job => (job.id !== id) ? job : { ...job, isApplied: true }))
  }

  const chunkedJobs = chunkArray(jobs, RESULTS_PER_PAGE)

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
          <JobsList jobs={chunkedJobs[currentPagination]} onApply={handleJobApply} />
          <Pagination itemsNumber={chunkedJobs.length} onClick={handlePaginationChange} currentIndex={currentPagination} />
        </section>
      </main>
      <Footer />
    </>
  )
}

export default App
