import { useEffect, useState } from "react";

interface Users {
    id: number;
    name: string;
    username: string;
    email: string;
    phone: string;
}

function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center p-8">
      <div className="animate-spin rounded-full h-8 w-8 
                      border-2 border-indigo-600 border-t-transparent" />
    </div>
  );
}

function ErrorMessage({ message }: { message: string }) {
  return (
    <div className="bg-red-50 border border-red-200 rounded-lg p-4">
      <p className="text-red-800 font-medium">⚠️ {message}</p>
    </div>
  );
}

function Statetest() {
    const [users, setUsers] = useState<Users[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    const fetchUsers = async () => {
        setLoading(true);
        setError(null);
        try {
            const res = await fetch("https://jsonplaceholder.typicode.com/users");
            if(!res.ok){
                throw new Error("Failed to fetch users");
            }
            const data: Users[] = await res.json();
            console.log("Fetched users:", data);
            setUsers(data);
        } catch (error) {
            setError(error instanceof Error ? error.message : "An unknown error occurred");
        } finally {
            setLoading(false);
        }
    };

    const cleanUp = () => {
        const controller = new AbortController();
        return controller.abort();
    }

    useEffect(() => {
        fetchUsers();
        return cleanUp();
    }, []);

    if(loading){
        return <LoadingSpinner />;
    }

    if(error){
        return <ErrorMessage message={error} />;
    }

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
