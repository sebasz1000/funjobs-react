import { useEffect, useState } from "react"
import { Footer } from "./components/Footer"
import { Form } from "./components/Form"
import { Header } from "./components/Header"
import { Pagination } from "./components/Pagination"
import { JobsList } from "./components/JobsList"
import { FILTERS, RESULTS_PER_PAGE } from "./consts/const"
import { jobsMapper } from "./utils/jobs.mapper"


const initFilters = Object.keys(FILTERS).reduce((obj, filterName) => {
  obj[filterName.toLowerCase()] = FILTERS[filterName][0].value
  return obj
}, {})

function App() {

  const [jobs, setJobs] = useState([])
  const [currentPagination, setCurrentPagination] = useState(0)
  const [filters, setFilters] = useState(initFilters)
  const [searchText, setSearchText] = useState("")

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

  const handleFiltersChange = (filterObj) => {
    setFilters(prevFilters => ({ ...prevFilters, ...filterObj }))
    setCurrentPagination(0)
  }


  const getFilteredJobs = (jobs) => {
    if (!jobs)
      return []

    const sanitizedSearchText = searchText.trim().toLowerCase()

    return jobs?.filter((job) => {

      const { modalidad, technology, nivel } = job.data

      const matchesSearch = !sanitizedSearchText || job.titulo.toLowerCase().includes(sanitizedSearchText)
      const matchesLocation = !filters.location || (modalidad === filters.location)
      const matchesExperience = !filters.experience || (nivel === filters.experience)
      const matchesTechnology = !filters.technology || (Array.isArray(technology) ? technology.includes(filters.technology) : (filters.technology === technology))

      return matchesSearch && matchesLocation && matchesExperience && matchesTechnology
    })
  }

  const handleSearchText = (value) => {
    console.log(value)
    setSearchText(value)
    setCurrentPagination(0)

  }


  const filteredJobs = getFilteredJobs(jobs)
  const totalPages = Math.ceil(filteredJobs.length / RESULTS_PER_PAGE)
  const paginatedJobs = filteredJobs.slice(
    currentPagination * RESULTS_PER_PAGE,
    (currentPagination + 1) * RESULTS_PER_PAGE
  )

  return (
    <>
      <Header />
      <main>
        <section className="jobs-search">
          <h1>Encuentra tu próximo trabajo</h1>
          <p>Explora miles de oportunidades en el sector tecnológico.</p>
          <Form onFiltersChange={handleFiltersChange}
            onSearchChange={handleSearchText}
            textValue={searchText}
            onSearchSubmit={handleSearchText} />
        </section>
        <section>
          <h2 style={{ textAlign: "center" }}>Resultados de búsqueda</h2>
          <JobsList jobs={paginatedJobs} onApply={handleJobApply} />
          <Pagination pagesNumber={totalPages} onClick={handlePaginationChange} currentIndex={currentPagination} />
        </section>
      </main>
      <Footer />
    </>
  )
}

export default App
