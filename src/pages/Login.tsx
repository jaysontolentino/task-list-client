import {useMutation} from '@apollo/client'
import {useNavigate} from 'react-router-dom'
import { LOGIN } from '../graphql/mutations'
import { setAccessToken } from '../utils/localStorage'
import { useForm } from '../hooks/useForm'
import { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'


function Login() {

    const navigate = useNavigate()
    const context = useContext(AuthContext)

    const {data: userInput, onChange, onSubmit} = useForm(handleSubmit, {
        email: '',
        password: ''
    })

    const [login, {loading, error}] = useMutation(LOGIN, {
        update(cache, {data: {login: userData}}) {
            setAccessToken(userData.access_token)
            navigate('/')
        },
        variables: {
            input: userInput
        }
    })

    function handleSubmit() {
        login()
    }

    return (
        <div className="w-full flex flex-col justify-center items-center ">
            <div className="flex justify-center items-center flex-col w-96 h-auto bg-white rounded-lg shadow-md p-4">
                <h3 className="text-2xl font-medium">Login</h3>

                <form className="flex flex-col gap-y-2 w-full mt-4" onSubmit={onSubmit}>
                    <input type="email" name="email" className="p-2 w-full rounded-md border border-[#23AAAA]" placeholder="Email" onChange={onChange} />
                    <input type="password" name="password" className="p-2 w-full rounded-md border border-[#23AAAA]" placeholder="Password" onChange={onChange} />

                    <button type="submit" className="w-full p-2 bg-[#23AAAA] text-white rounded">{loading ? 'Loading':'Login'}</button>

                    {error && <span className='w-full p-2 bg-red-200 rounded border border-red-500 text-red-700 text-center'>{error.message}</span>}
                    
                </form>
            </div>
        </div>
    )
}

export default Login