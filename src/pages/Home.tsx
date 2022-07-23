import { useAuth } from "../hooks/useAuth"


function Home() {

    const auth = useAuth()

    return (
        <div>
            <h1>Home Page</h1>

            <pre>
                {JSON.stringify(auth)}
            </pre>
        </div>
    )
}

export default Home