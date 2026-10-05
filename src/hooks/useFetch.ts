import { useState, useEffect } from "react";

interface FetchResult<T> {
    data: T | null,
    loading: boolean,
    error: string | null;
}

export function useFetch<T>(url: string): FetchResult<T> {
    const [data, setData] = useState<T | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const controller = new AbortController();

        const fetchData = async () => {
            try {
                setLoading(true);
                const response = await fetch(url, { signal: controller.signal });
                if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

                const result: T = await response.json();
                setData(result);

            } catch (err) {
                if (err instanceof DOMException) return;
                setError(err instanceof Error ? err.message : 'Error');
            } finally {
                setLoading(false);
            }
        };

        fetchData();

        return () => controller.abort();
    }, [url]);

    return { data, loading, error };
}