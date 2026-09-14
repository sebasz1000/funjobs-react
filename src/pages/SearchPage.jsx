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

    const {
        handleFiltersChange,
        handleSearchText,
        searchText,
        jobs,
        isLoading,
        handleJobApply,
        totalPages,
        handlePaginationChange,
        currentPagination,
        handleFiltersReset,
        filters,
    } = useFilters({
        initFilters: INIT_FILTERS,
        initSearchText: urlParams.get("text") ?? ""

    })

    return (
        <main>
            <Form onFiltersChange={handleFiltersChange}
                onSearchChange={handleSearchText}
                textValue={searchText}
                onSearchSubmit={handleSearchText}
                items={FILTERS}
                currentFiltersValues={filters}
                onFiltersReset={handleFiltersReset}
            />
            <section>
                {!isLoading ?
                    <JobsList jobs={jobs}
                        onApply={handleJobApply} />
                    : <p>Loading....</p>}
                <Pagination pagesNumber={totalPages}
                    onClick={handlePaginationChange}
                    currentIndex={currentPagination} />
            </section>
        </main>

    )
}

export default SearchPage

/** 8:24:22 */