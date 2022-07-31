import { useContext } from "react"
import AppContext from "../context/AppContext"
import useTask from "../hooks/useTask"
import Button from "./Button"

export interface ITask {
    id: string
    task: string
    description: string
    complete: boolean
    created_at?: Date
}


export const Task: React.FC<{task: ITask}> = ({task}) => {

    const context = useContext(AppContext);

    const {completeTask, deleteTask} = useTask()

    function onCompleteTask(id: string) {
        completeTask({
            variables: { 
                id
            }
        })
    }

    function onDeleteTask(id: string) {
        deleteTask({
            variables: { 
                id
            }
        })
    }

    return (
        <div className={`flex flex-col border py-3 px-2 rounded-md ${task.complete ? 'bg-slate-200' : 'bg-teal-50'} text-slate-700 shadow-md`}>
            <header className={`font-medium text-xl  border-b-2 py-2 ${task.complete && 'line-through'}`}>{task.task}</header>

            <article className={`py-2 text-sm ${task.complete && 'line-through'}`}>{task.description}</article>

            <footer className='flex justify-between py-2 border-t-2'>
                <span className='text-xs italic'>July 28, 2022</span>

                <div className='flex gap-x-2'>
                    {!task.complete && <Button xs="text-sm py-1 px-2" text="Mark as complete" onClick={e => {
                        onCompleteTask(task.id)
                    }} />}
                    {!task.complete && <Button xs="text-sm py-1 px-2" text="Update" onClick={ e => {
                        context?.editModal(task.id)
                    }} />}
                    <Button xs="text-sm py-1 px-2" text="Delete" onClick={e => {
                        onDeleteTask(task.id)
                    }} />
                </div>
            </footer>
        </div>
    )
}

export default Task