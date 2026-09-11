import { useEffect, useState } from "react"

const NAVIGATION_LOCATION_CHANGE_EVENT = "onlocationchange"

export function useRouter() {
    const [currentPath, setCurrentPath] = useState(window.location.pathname)

    useEffect(() => {

        const handleLocationChange = () => setCurrentPath(window.location.pathname)

        window.addEventListener(NAVIGATION_LOCATION_CHANGE_EVENT, handleLocationChange)

        window.addEventListener("popstate", handleLocationChange)
        return () => {
            window.removeEventListener(NAVIGATION_LOCATION_CHANGE_EVENT, handleLocationChange)
            window.removeEventListener("popstate", handleLocationChange)
        }
    }, [])

    const navigateTo = (href) => {
        window.history.pushState({}, "", href)
        window.dispatchEvent(new CustomEvent(NAVIGATION_LOCATION_CHANGE_EVENT))
    }
    return {
        currentPath,
        navigateTo

    }
}