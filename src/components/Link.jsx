import { useRouter } from "../hooks/useRouter"

export function Link({ href, children, ...restOfProps }) {

    const { navigateTo, currentPath } = useRouter()

    const handleClick = (e) => {
        e.preventDefault()
        navigateTo(href)
    }
    const isLinkActive = (currentPath === href)
    const aClassName = isLinkActive ? "is-active" : ""

    return (
        <a href={href}
            className={aClassName}
            disabled={isLinkActive}
            {...restOfProps}
            onClick={handleClick}>
            {children}
        </a>
    )
}

