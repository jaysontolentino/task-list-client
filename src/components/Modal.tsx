import { useMutation } from '@apollo/client'
import { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import { ADD_TASK } from '../graphql/mutations'
import { useForm } from '../hooks/useForm'
import Alert from './Alert'
import Button from './Button'

const initialState = {
    task: '',
    description: ''
}

function Modal() {

    const context = useContext(AuthContext)

    const {data, error, onChange, onSubmit, setError, reset} = useForm(handleSubmit, initialState)

    const [addTask] = useMutation(ADD_TASK, {
        onCompleted(data) {
            reset(initialState)
            context?.toggleModal()
        },
        onError(error) {
            setError(error.message)
        },
    })

    function handleSubmit() {
        addTask({
            variables: {
                input: data
            }
        })
    }


    return (
        <div className="w-screen h-screen flex justify-center items-center absolute top-0 left-0 bg-[#23AAAA]">
            <div className="w-1/3 flex flex-col bg-white shadow-sm rounded p-4 gap-y-4 relative">
                <div className=" w-full text-center inline-block">
                    <h1 className="font-medium text-2xl">Add Task</h1>
                </div>
                
                {error && <Alert type="error" message={error} />}

                <form onSubmit={onSubmit}>
                    <div className="w-full flex flex-col gap-y-2">
                        <input 
                        name="task"
                        type="text" 
                        className="flex flex-1 py-1 px-2 rounded border border-slate-300"
                        placeholder="Task Title"
                        onChange={onChange} />

                        <textarea
                        name="description"
                        className="flex flex-1 py-1 px-2 rounded border border-slate-300" 
                        rows={3} 
                        placeholder="Task Description" 
                        onChange={onChange}></textarea>

                        <Button 
                        xs="py-2 px-4 w-32 border-0 text-slate-600" 
                        text="Submit" />
                    </div>  
                </form>

                

                <Button xs="w-8 absolute top-0 right-0" text="X" onClick={context?.toggleModal} />
                
            </div>
        </div>
    )
}

export default Modal