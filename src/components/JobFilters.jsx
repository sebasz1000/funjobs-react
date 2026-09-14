function GroupedFilters({ children, label }) {
    return <optgroup label={label}>{children}</optgroup>
}

function JobFilter({
    name,
    options = [],
    onChange,
    value
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
        <select name={loweredName}
            id={`filter-${loweredName}`}
            onChange={handleChange}
            value={value}>
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

export function JobFilters({
    items = {},
    onChange,
    values = {},
    onReset
}) {

    if (!items)
        return null

    const hasFiltersSet = Object.values(values).some(filterValue => filterValue !== "")

    return <div className="search-filters">

        {
            Object.keys(items).map(itemLabel => {
                return <JobFilter name={itemLabel}
                    key={itemLabel}
                    options={items[itemLabel]}
                    onChange={onChange}
                    value={values[itemLabel.toLocaleLowerCase()]} />
            })
        }
        {
            hasFiltersSet
                ? <button onClick={onReset} style={{ marginLeft: "auto" }} >Clear Filters</button>
                : null
        }

    </div>
}
