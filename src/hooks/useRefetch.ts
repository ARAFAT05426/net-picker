import { useCallback, useEffect, useState } from 'react';
import axios, { AxiosResponse } from 'axios';

type UseRefetchResult<T> = {
    data: T | null;
    loading: boolean;
    error: string | null;
    refetch: () => Promise<void>;
};

function useRefetch<T>(url: string): UseRefetchResult<T> {
    const [data, setData] = useState<T | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const fetchData = useCallback(async () => {
        setLoading(true);
        setError(null);

        try {
            const response: AxiosResponse<T> = await axios.get(url);
            setData(response.data);
        } catch (err) {
            console.error("Error fetching data:", err); // Debugging line
            setError(err instanceof Error ? err.message : "An unknown error occurred.");
        } finally {
            setLoading(false);
        }
    }, [url]);

    // Fetch data once when the component mounts
    useEffect(() => {
        fetchData();
    }, [fetchData]);

    return { data, loading, error, refetch: fetchData };
}

export default useRefetch;
