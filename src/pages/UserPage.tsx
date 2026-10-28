import { useLoaderData } from "react-router";

function UserPage() {
    const data = useLoaderData();
    console.log(data);
    return (
        <div>
            user loader page
        </div>
    );
}

export default UserPage;
