import type { ActionFunctionArgs } from "react-router";

export const searchUserAction = async ({ request }: ActionFunctionArgs) => {
    try {
        const formData = await request.formData();
        const id = formData.get("id");
        const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data = await res.json();
        console.log('search result:', data);
    } catch (error) {
        if (error instanceof DOMException) return;
    }
};