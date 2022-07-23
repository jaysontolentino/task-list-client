import {useMutation} from '@apollo/client'
import {useNavigate} from 'react-router-dom'
import { REGISTER } from '../graphql/mutations'
import { useForm } from '../hooks/useForm'


function Register() {

    const navigate = useNavigate()

    const {data, onChange, onSubmit} = useForm(handleSubmit, {
        name: '',
        email: '',
        password: ''
    })

    const [register, {loading, error}] = useMutation(REGISTER, {
        variables: {
            input: data
        },
        onCompleted(data) {
            console.log(data)
            navigate('/login')
        },
    })

    function handleSubmit() {
        register()
    }

    return (
        <div className="w-full flex flex-col justify-center items-center ">
            <div className="flex justify-center items-center flex-col w-96 h-auto bg-white rounded-lg shadow-md p-4">
                <h3 className="text-2xl font-medium">Register</h3>

                <form className="flex flex-col gap-y-2 w-full mt-4" onSubmit={onSubmit}>

                    <input type="text" name="name" className="p-2 w-full rounded-md border border-[#23AAAA]" placeholder="Name" onChange={onChange} />
                    <input type="email" name="email" className="p-2 w-full rounded-md border border-[#23AAAA]" placeholder="Email" onChange={onChange} />
                    <input type="password" name="password" className="p-2 w-full rounded-md border border-[#23AAAA]" placeholder="Password" onChange={onChange} />

                    <button type="submit" className="w-full p-2 bg-[#23AAAA] text-white rounded">{loading ? 'Loading':'Register'}</button>

                    {error && <span className='w-full p-2 bg-red-200 rounded border border-red-500 text-red-700 text-center'>{error.message}</span>}
                    
                </form>
            </div>
        </div>
    )
}

export default Register