import { useEffect, useState } from "react";

interface Users {
    id: number;
    name: string;
    username: string;
    email: string;
    phone: string;
}

function Statetest() {
    const [users, setUsers] = useState<Users[]>([]);

    const fetchUsers = async () => {
        try {
            const res = await fetch("https://jsonplaceholder.typicode.com/users");
            if(!res.ok){
                throw new Error("Failed to fetch users");
            }
            const data: Users[] = await res.json();
            console.log("Fetched users:", data);
            setUsers(data);
        } catch (error) {
            console.error("Error fetching users:", error);
        } finally{
            console.log("Fetch users completed", users);
        }
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    return (
        <div className="flex flex-col justify-center items-center mt-10">
            {users.length > 0 ? (
                <div>
                    <h1 className="text-2xl font-bold mb-4">Users List</h1>
                    <div className="grid border">
                        <div>
                            {users.map((user) => (
                                <div key={user.id} className="border p-2">
                                    <p><strong>Name:</strong> {user.name}</p>
                                    <p><strong>Username:</strong> {user.username}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            ) : (
                <p>No users found.</p>
            )}
        </div>
    );
}

export default Statetest;
