import { useState, useEffect } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // const abortCont = new AbortController();

        setTimeout(() => {
            fetch(url)
                .then(res => {
                    if (!res.ok) {
                        throw Error('Could not fetch the data for that resource')
                    };
                    // if ('status == 404') {
                    //     throw Error('Page not found')
                    // };
                    return res.json();
                })
                .then((data) => {
                    setData(data);
                    setIsLoading(false);
                    setError(null);
                })
                .catch((error) => {
                    setIsLoading(false);
                    setError(error.message);
                });
        }, 1000);

        // return () => abortCont.abort();
    }, [url]);

    return { data, isLoading, error }
}

export default useFetch;