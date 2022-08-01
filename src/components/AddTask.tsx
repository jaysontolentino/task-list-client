import { useForm } from "../hooks/useForm"
import useTask from "../hooks/useTask"
import Alert from "./Alert"
import Button from "./Button"

interface IModalState {
    task: string
    description: string
}

function AddTask() {

    const initialState = {
        task: '',
        description: ''
    }

    const {data: input, error, onChange, onSubmit, setError, reset} = useForm<IModalState>(handleSubmit, initialState)

    const {addTask} = useTask()
    
    function handleSubmit() {
        
            addTask({
                variables: {input},
                onCompleted() {
                    reset(initialState)
                },
                onError(error) {
                    setError(error.message)
                },
            })
        
    }

    return (
        <div className="w-2/3 flex flex-col bg-white shadow-sm rounded p-4 gap-y-4 relative">
            <div className=" w-full inline-block">
                <h1 className="font-medium text-lg">Add Task</h1>
            </div>
            
            {error && <Alert type="error" message={error} />}

            <form onSubmit={onSubmit}>
                <div className="w-full flex flex-col gap-y-2">
                    <input 
                    name="task"
                    type="text" 
                    className="flex flex-1 py-1 px-2 rounded border border-slate-300"
                    placeholder="Task Title"
                    value={input.task}
                    onChange={onChange} />

                    <textarea
                    name="description"
                    className="flex flex-1 py-1 px-2 rounded border border-slate-300" 
                    rows={3} 
                    placeholder="Task Description" 
                    value={input.description}
                    onChange={onChange}></textarea>

                    <Button 
                    xs="py-2 px-4 w-32 border-0 text-slate-600" 
                    text="Submit" />
                </div>  
            </form>
            
        </div>
    )
}

export default AddTask