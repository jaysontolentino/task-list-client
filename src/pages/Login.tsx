import { useForm } from '../hooks/useForm'
import Alert from '../components/Alert'
import { useAuth } from '../hooks/useAuth'


function Login() {

    const {data, error, onChange, onSubmit, setError} = useForm(handleSubmit, {
        email: '',
        password: ''
    })

    const {session} = useAuth()
    const [login, {loading}] = session


    function handleSubmit() {
        login({
            variables: {
                input: data
            },
            onError(error) {
                if(error.message === 'Failed to fetch') {
                    setError('Internal server error')
                }else {
                    setError(error.message)
                }    
            },
        })
    }

    return (
        <div className="w-full flex flex-col justify-center items-center ">
            <div className="flex justify-center items-center flex-col w-96 h-auto bg-white rounded-lg shadow-md p-4">
                <h3 className="text-2xl font-medium">Login</h3>

                <form className="flex flex-col gap-y-2 w-full mt-4" onSubmit={onSubmit}>
                    <input type="email" name="email" className="p-2 w-full rounded-md border border-[#23AAAA]" placeholder="Email" onChange={onChange} />
                    <input type="password" name="password" className="p-2 w-full rounded-md border border-[#23AAAA]" placeholder="Password" onChange={onChange} />

                    <button type="submit" className="w-full p-2 bg-[#23AAAA] text-white rounded">{loading ? 'Loading':'Login'}</button>

                    {error && <Alert type="error" message={error} />}
                    
                </form>
            </div>
        </div>
    )
}

export default Login