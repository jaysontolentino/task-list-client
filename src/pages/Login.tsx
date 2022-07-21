import { useState } from 'react'
import {useMutation} from '@apollo/client'
import {useNavigate} from 'react-router-dom'
import { LOGIN, REFRESH_TOKEN } from '../graphql/mutations'
import { useStore } from '../hooks/useStore'


function Login() {

    const navigate = useNavigate()

    const store = useStore()

    const [login, {loading, error, data}] = useMutation(LOGIN, {
        mutation: REFRESH_TOKEN
    })

    const [userInput, setUserInput] = useState({
        email: '',
        password: ''
    })

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {

        let input = e.target

        setUserInput({
            ...userInput,
            [input.name]: input.value
        })

        
    }

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()

        login({variables: {
            input: userInput
        }})

        // TODO:
        //add user to context
        //update access token
        //redirect to home

        store.setUser({id: 1, name: 'jane', email: 'jane@email.com'})

        navigate('/')
    }

    return (
        <div className="w-screen h-screen flex justify-center items-center bg-blue-300">
            <div className="flex justify-center items-center flex-col w-96 h-auto bg-white rounded-lg shadow-md p-4">
                <h3 className="text-2xl font-medium">Login</h3>

                <form className="flex flex-col gap-y-2 w-full mt-4" onSubmit={handleSubmit}>
                    <input type="email" name="email" className="p-2 w-full rounded-md border border-blue-300" placeholder="Email" onChange={handleChange} />
                    <input type="password" name="password" className="p-2 w-full rounded-md border border-blue-300" placeholder="Password" onChange={handleChange} />

                    <button type="submit" className="w-full p-2 bg-blue-600 text-white rounded">{loading ? 'Loading':'Login'}</button>

                    {error && <span className='w-full p-2 bg-red-200 rounded border border-red-500 text-red-700 text-center'>{error.message}</span>}
                    
                </form>
            </div>
        </div>
    )
}

export default Login