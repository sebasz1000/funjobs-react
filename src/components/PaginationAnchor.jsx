import styles from "./PaginationAnchor.module.css"
export function PaginationAnchor({ index, onClick, isActive }) {

    const handleClick = (e) => {
        e.preventDefault()
        onClick(index)
    }

    const isActiveClass = isActive ? styles.isActive : ""

    return <a data-index={index}
        href="#"
        className={`${styles.paginationAnchor} ${isActiveClass}`}
        onClick={handleClick}
        disabled={isActive}>
        {index + 1}
    </a>
}