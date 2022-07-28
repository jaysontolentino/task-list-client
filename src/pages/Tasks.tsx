import { useMutation, useQuery } from "@apollo/client"
import { useState } from "react"
import { ADD_TASK } from "../graphql/mutations"
import { TASKS } from "../graphql/queries"

function Tasks() {

    const [task, setTask] = useState('')

    const {data, loading, error} = useQuery(TASKS)

    const [addTask] = useMutation(ADD_TASK, {
        variables: {
            input: {
               task,
                description: 'sample description' 
            } 
        },
        refetchQueries: [
            {query: TASKS},
            'UserTasks'
        ],
    })

    if(loading) return <span>Loading...</span>

    if(error) return <span>{error.message}</span>

    function add() {
        addTask()
    }

    function onChange(e: React.ChangeEvent<HTMLInputElement>) {
        setTask(e.target.value)
    }

    return (
        <div className="container flex flex-col justify-center items-center">

            <div className="w-3/4 flex flex-col bg-white shadow-sm rounded p-4 gap-y-4">
                <div className=" w-full text-center inline-block">
                    <h1 className="font-medium text-2xl">Task List</h1>
                </div>
                
                <div className="w-full flex">
                    <input 
                    type="text" 
                    className="flex flex-1 p-2 rounded border border-teal-300"
                    onChange={onChange} />
                    <button 
                    className="py-2 px-4 w-32 bg-[#23AAAA] border-0 rounded-r-md text-white" 
                    onClick={add}>Add</button>
                </div>

                <div className="flex w-full">
                    <ul className="w-full flex flex-col gap-y-3">
                        {
                            data.userTasks.map((task: any) => {
                                return (
                                    <li key={task.id} className="flex w-full p-4 border border-teal-500 rounded">
                                        {task.task}
                                    </li>
                                )
                            })
                        }
                        
                    </ul>
                </div>
            </div>
            
        </div>
    )
}

export default Tasks