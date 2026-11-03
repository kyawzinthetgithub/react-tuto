import { Form, NavLink, useLoaderData } from "react-router";
import type { Users } from "../components/Statetest";

function UserPage() {
    const data = useLoaderData() as Users[] | undefined;
    console.log('loader data:', data);
    return (
        <div className="p-5 gap-5 flex flex-col">

            <Form method="post" action="/users" className="flex gap-2">
                <input type="text" name="id" placeholder="Enter user id" className="border border-gray-300 rounded px-2 py-1" />
                <button type="submit" className="bg-blue-500 text-white rounded px-4 py-2 cursor-pointer">Search</button>
            </Form>

            <h1>Users</h1>
            <ul>{data && data.map((user: Users) => (<NavLink key={user.id} to={`/user/${user.id}`}><li className="list-disc ml-5 hover:text-blue-500">{user.name} - {user.email}</li></NavLink>))}</ul>
        </div>
    );
}

export default UserPage;
