import { useContext, useEffect } from 'react'
import AppContext from '../context/AppContext'
import { useForm } from '../hooks/useForm'
import useTask from '../hooks/useTask'
import Alert from './Alert'
import Button from './Button'
import Loading from './Loading'

interface IModalState {
    task: string
    description: string
}

function Modal() {

    const context = useContext(AppContext);
    const taskId = context?.modal.id

    const {useGetTask, updateTask} = useTask()
    const {data: getTaskData, error: getTaskError, loading} = useGetTask(taskId)
    const {data: input, setData, error, onChange, onSubmit} = useForm<IModalState>(handleSubmit, {
        task: '',
        description: ''
    })

    useEffect(() => {
        if(getTaskData) {
            setData({
                task: getTaskData.getById.task,
                description: getTaskData.getById.description
            })
        }
    
        if(getTaskError) {
            setData({
                task: '',
                description: ''
            })
        }
        // eslint-disable-next-line
    }, [getTaskData])
    
    function handleSubmit() {
        updateTask({
            variables: {
                payload: input,
                id: taskId
            }
        })

        context?.closeModal()
    }

    if(loading) return <Loading />

    return (
        <div className="w-screen h-screen flex justify-center items-center fixed top-0 left-0 bg-[#23AAAA]">
            <div className="w-1/3 flex flex-col bg-white shadow-sm rounded p-4 gap-y-4 relative">
                <div className=" w-full text-center inline-block">
                    <h1 className="font-medium text-2xl">Edit Task</h1>
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

                <Button xs="w-8 absolute top-0 right-0" text="X" onClick={context?.closeModal} />
                
            </div>
        </div>
    )
}

export default Modal