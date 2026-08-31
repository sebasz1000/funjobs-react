export function PaginationAnchor({ index, onClick, isActive }) {

    const handleClick = (e) => {
        e.preventDefault()
        onClick(index)
    }

    const isActiveClass = isActive ? "is-active" : ""

    return <a data-index={index}
        href="#"
        className={`pagination-anchor ${isActiveClass}`}
        onClick={handleClick}
        disabled={isActive}>
        {index + 1}
    </a>
}