import { useLoaderData } from "react-router";
import type { Users } from "../components/Statetest";

function UserPage() {
    const data = useLoaderData() as Users[] | undefined;
    console.log(data);
    return (
        <div className="p-5 gap-5 flex flex-col">
            <h1>Users</h1>
            <ul>{data && data.map((user: Users) => (<li key={user.id} className="list-disc ml-5">{user.name} - {user.email}</li>))}</ul>
        </div>
    );
}

export default UserPage;
