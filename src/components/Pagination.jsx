import styles from "./Pagination.module.css"
import { ChevronIcon } from "./ChevronIcon"
import { PaginationAnchor } from "./PaginationAnchor"

export function Pagination({ pagesNumber = 1
    , onClick
    , currentIndex }) {

    //pagesNumber = pagesNumber ?? 1
    const hasItems = pagesNumber > 0

    if (!hasItems)
        return

    const isPrevHidden = (currentIndex === 0)
    const isNextHidden = (currentIndex === (pagesNumber - 1))
    const pages = Array.from({ length: pagesNumber }, (_, i) => i)

    const handlePrevNext = (direction) => {
        (direction === "prev")
            ? !isPrevHidden && onClick(currentIndex - 1)
            : !isNextHidden && onClick(currentIndex + 1)
    }


    return (
        <nav className={styles.pagination}>
            <ChevronIcon direction="prev"
                onClick={handlePrevNext}
                isHidden={isPrevHidden} />
            <div className={styles.paginationNumbers}>
                {
                    pages.map(pageIndex => {
                        const isActive = (currentIndex === pageIndex)
                        return <PaginationAnchor key={pageIndex}
                            index={pageIndex}
                            onClick={onClick}
                            isActive={isActive} />
                    })
                }
            </div>
            <ChevronIcon direction="next"
                onClick={handlePrevNext}
                isHidden={isNextHidden} />
        </nav>
    )
}