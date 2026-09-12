import { Form } from "../components/Form"
import { Pagination } from "../components/Pagination"
import { JobsList } from "../components/JobsList"
import { FILTERS } from "../consts/const"
import { useFilters } from "../hooks/useFilters"


const INIT_FILTERS = Object.keys(FILTERS).reduce((obj, filterName) => {
    obj[filterName.toLowerCase()] = FILTERS[filterName][0].value
    return obj
}, {})




function SearchPage() {

    const urlParams = new URLSearchParams(window.location.search)
    const INIT_SEARCH_TEXT = urlParams.get("text") ?? ""

    const {
        handleFiltersChange,
        handleSearchText,
        searchText,
        paginatedJobs,
        handleJobApply,
        totalPages,
        handlePaginationChange,
        currentPagination
    } = useFilters({
        initFilters: INIT_FILTERS,
        initSearchText: INIT_SEARCH_TEXT
    })

    return (
        <main>
            <Form onFiltersChange={handleFiltersChange}
                onSearchChange={handleSearchText}
                textValue={searchText}
                onSearchSubmit={handleSearchText}
                filters={FILTERS} />
            <section>
                <JobsList jobs={paginatedJobs}
                    onApply={handleJobApply} />
                <Pagination pagesNumber={totalPages}
                    onClick={handlePaginationChange}
                    currentIndex={currentPagination} />
            </section>
        </main>

    )
}

export default SearchPage

/** 8:24:22 */