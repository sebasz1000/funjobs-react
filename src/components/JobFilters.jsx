function GroupedFilters({ children, label }) {
    return <optgroup label={label}>{children}</optgroup>
}

function JobFilter({
    name,
    options = [],
    onChange
}) {

    const groupJobs = (jobs) => {
        return jobs.reduce((obj, job) => {
            job.isPopular
                ? (obj.arePopular = [...obj.arePopular, job])
                : (obj.areRegular = [...obj.areRegular, job])

            return obj

        }, { arePopular: [], areRegular: [] })
    }

    const renderFilters = (jobs) => {
        if (!jobs.length) {
            return <option key={jobs.id} value={jobs.value}>{jobs.literal}</option>
        }
        return jobs.map(({ value, literal, id }) => <option key={id} value={value}>{literal}</option>)

    }

    const loweredName = name.toLowerCase()

    const handleChange = (e) => {
        onChange({ [loweredName]: e.target.value })
    }

    const shouldGroup = options.some(opt => opt.isPopular === true)
    const groupedJobs = shouldGroup ? groupJobs(options) : null

    return (
        <select name={loweredName} id={`filter-${loweredName}`} onChange={handleChange}>
            {
                shouldGroup
                    ? <>
                        {renderFilters(groupedJobs.areRegular[0])}
                        <GroupedFilters label="Tecnologías populares">
                            {renderFilters(groupedJobs.arePopular)}
                        </GroupedFilters>
                        {renderFilters(groupedJobs.areRegular.slice(1))}
                    </>
                    : renderFilters(options)
            }
        </select>)

}

export function JobFilters({ filters = {}, onChange }) {

    if (!filters)
        return null

    return <div className="search-filters">

        {
            Object.keys(filters).map(filterLabel =>
                <JobFilter name={filterLabel}
                    key={filterLabel}
                    options={filters[filterLabel]}
                    onChange={onChange} />)
        }

    </div>
}
