import { JobFilters } from "./JobFilters";
import { useId, useRef } from "react";

export function Form({ filters, onFiltersChange, onSearchChange, onSearchSubmit, textValue }) {

    const idText = useId()
    const searchTextRef = useRef("")

    const handleChange = (e) => {
        onSearchChange(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const formData = new FormData(e.target)
        const newSearchText = formData.get(idText)
        //? This probably will work on server call
        if (newSearchText === textValue)
            return
        onSearchSubmit(newSearchText)
        searchTextRef.current = newSearchText
    }

    return (
        <form id="empleos-search-form" role="search" onSubmit={handleSubmit}>
            <div className="search-bar">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"
                    className="icon icon-tabler icons-tabler-outline icon-tabler-search">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
                    <path d="M21 21l-6 -6" />
                </svg>
                <input name={idText}
                    id="empleos-search-input"
                    required
                    type="text"
                    value={textValue}
                    placeholder="Buscar trabajos, empresas o habilidades"
                    onChange={handleChange} />

                <button type="submit">Buscar</button>
            </div>

            <JobFilters filters={filters} onChange={onFiltersChange} />
        </form>
    )
}