function GroupedFilters({ children, label }) {
    return <optgroup label={label}>{children}</optgroup>
}

function JobFilter({
    name,
    options = [],
    onChange
}) {

    const groupOptions = (filters) => {
        return filters.reduce((obj, filter) => {
            filter.isPopular
                ? (obj.arePopular = [...obj.arePopular, filter])
                : (obj.areRegular = [...obj.areRegular, filter])

            return obj

        }, { arePopular: [], areRegular: [] })
    }

    const renderFilters = (filters) => {
        if (!filters.length) {
            return <option key={filters.id} value={filters.value}>{filters.literal}</option>
        }
        return filters.map(({ value, literal, id }) => <option key={id} value={value}>{literal}</option>)

    }

    const loweredName = name.toLowerCase()

    const handleChange = (e) => {
        onChange({ [loweredName]: e.target.value })
    }

    const shouldGroup = options.some(opt => opt.isPopular === true)
    const groupedOptions = shouldGroup ? groupOptions(options) : null

    return (
        <select name={loweredName} id={`filter-${loweredName}`} onChange={handleChange}>
            {
                shouldGroup
                    ? <>
                        {renderFilters(groupedOptions.areRegular[0])}
                        <GroupedFilters label="Tecnologías populares">
                            {renderFilters(groupedOptions.arePopular)}
                        </GroupedFilters>
                        {renderFilters(groupedOptions.areRegular.slice(1))}
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
