import { useQuery } from '@apollo/client'
import { useContext } from 'react'
import Loading from '../components/Loading'
import Modal from '../components/Modal'
import Task, { ITask } from '../components/Task'
import { AuthContext } from '../context/AuthContext'
import { TASKS } from '../graphql/queries'



function Tasks() {

    const {data, error, loading} = useQuery(TASKS)
    const context = useContext(AuthContext)

    
    if(loading) return <Loading />

    //if(context?.openModal) return 

    return (
        <>        
            <div className="container flex flex-col justify-center items-center">

                {error && <span>{error.message}</span>}

                <div className="w-2/4 flex flex-col bg-white shadow-sm rounded p-4 gap-y-4">

                    <div className=" w-full text-center inline-block">
                        <h1 className="font-medium text-2xl">Task List</h1>
                    </div>

                    <ul>
                    {data.userTasks.map((task: ITask) => {
                        return <li key={task.id}><Task task={task} /></li>
                    })}
                    </ul>
                    
                </div>
                
            </div>
                
            {context?.openModal && <Modal />}
            
        </>

    )
}

export default Tasks