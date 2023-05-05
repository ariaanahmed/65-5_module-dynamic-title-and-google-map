import { useEffect } from "react"

const useTitle = (title) => {
    useEffect(() => {
        document.title = `${title} - my News`
    }, [title])
}

export default useTitle;