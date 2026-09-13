import { useEffect, useState } from "react"
import { RESULTS_PER_PAGE } from "../consts/const"
import { jobsMapper } from "../utils/jobs.mapper"

export function useFilters({
    initFilters = {},
    initSearchText = ""
}) {

    const [jobs, setJobs] = useState([])
    const [totalJobs, setTotalJobs] = useState(0)
    const [isLoading, setIsLoading] = useState(true)
    const [currentPagination, setCurrentPagination] = useState(0)
    const [filters, setFilters] = useState(initFilters)
    const [searchText, setSearchText] = useState(initSearchText)

    useEffect(() => {

        async function fetchJobs(url) {
            try {
                setIsLoading(true)
                const params = new URLSearchParams()
                if (searchText) params.append("text", searchText)
                if (filters.technology) params.append("technology", filters.technology)
                if (filters.location) params.append("type", filters.location)
                if (filters.experience) params.append("level", filters.experience)
                const offset = currentPagination * RESULTS_PER_PAGE
                params.append("offset", offset)
                params.append("limit", RESULTS_PER_PAGE)

                const queryParams = params.toString()



                const res = await fetch(`${url}?${queryParams}`)
                const { data, total } = await res.json()
                setJobs(data)
                setTotalJobs(total)
            } catch (error) {
                console.log("Got and error", error)
            } finally {
                setIsLoading(false)
            }
        }

        fetchJobs("https://jscamp-api.vercel.app/api/jobs")

    }, [searchText, filters, currentPagination])



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




    const handleSearchText = (value) => {
        setSearchText(value)
        setCurrentPagination(0)
    }


    const totalPages = Math.ceil(totalJobs / RESULTS_PER_PAGE)

    return {
        handleFiltersChange,
        handleSearchText,
        searchText,
        jobs,
        isLoading,
        handleJobApply,
        totalPages,
        handlePaginationChange,
        currentPagination
    }
}