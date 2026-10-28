export const userLoader = async () => {
    try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data = await res.json();
        return data;
    } catch (error) {
        if (error instanceof DOMException) return;
    }
};
