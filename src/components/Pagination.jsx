import { ChevronIcon } from "./ChevronIcon"
import { PaginationAnchor } from "./PaginationAnchor"

export function Pagination({ itemsNumber, onClick, currentIndex }) {

    const hasItems = itemsNumber > 0

    if (!hasItems)
        return

    const handlePrevNext = (direction) => {

        (direction === "prev")
            ? (currentIndex > 0) && onClick(currentIndex - 1)
            : (currentIndex < (itemsNumber - 1)) && onClick(currentIndex + 1)

    }

    const isPrevHidden = (currentIndex === 0)
    const isNextHidden = (currentIndex === (itemsNumber - 1))
    return (
        <nav className="pagination">
            <ChevronIcon direction="prev"
                onClick={handlePrevNext}
                isHidden={isPrevHidden} />
            <div className="pagination-numbers">
                {
                    Array.from({ length: itemsNumber }).map((_, i) => {

                        const isActive = (currentIndex === i)
                        return <PaginationAnchor key={i} index={i} onClick={onClick} isActive={isActive} />
                    })
                }
            </div>
            <ChevronIcon direction="next"
                onClick={handlePrevNext}
                isHidden={isNextHidden} />
        </nav>
    )
}