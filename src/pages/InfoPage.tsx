import { redirect, useParams, useSearchParams } from "react-router";

function InfoPage() {

    const id = useParams().id;
    const [searchParams] = useSearchParams();
    const query = searchParams.get('query');
    const search = searchParams.get('search');

    const goHome = () => {
        console.log('go home');
        redirect("/");
    }

  return (
    <div>
      <h1 className="text-2xl font-bold text-center pt-2">Info Page</h1>

        <p className="p-2">User ID: {id} </p>
        <p className="p-2">query: {query} </p>
        <p className="p-2">search: {search} </p>
        <button onClick={goHome} className="bg-blue-500 text-white rounded px-4 py-2 cursor-pointer">
          Go Home
        </button>
    </div>
  )
}

export default InfoPage
