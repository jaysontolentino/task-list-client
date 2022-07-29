import {useMutation} from '@apollo/client'
import {useNavigate} from 'react-router-dom'
import { LOGIN } from '../graphql/mutations'
import { setAccessToken } from '../utils/localStorage'
import { useForm } from '../hooks/useForm'
import Alert from '../components/Alert'


function Login() {

    const navigate = useNavigate()

    const {data, error, onChange, onSubmit, setError} = useForm(handleSubmit, {
        email: '',
        password: ''
    })

    const [login, {loading}] = useMutation(LOGIN, {
        onCompleted(data) {
            console.log(data)
            setAccessToken(data.login.access_token)
            navigate('/')
        },
        onError(error) {
            if(error.message === 'Failed to fetch') {
                setError('Internal server error')
            }else {
                setError(error.message)
            }           
        },
    })


    function handleSubmit() {
        login({
            variables: {
                input: data
            }
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