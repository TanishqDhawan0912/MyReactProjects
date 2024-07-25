import { useState } from "react";

export function useFetch() {
    const [data, setData] = useState()
    const [isLoading, setIsLoading] = useState(false)
    const [isError, setIsError] = useState(true)
    return {
        data,
        isLoading,
        isError
    }
}