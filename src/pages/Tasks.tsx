import { useContext } from 'react';
import Loading from '../components/Loading'
import Modal from '../components/Modal'
import Task, { ITask } from '../components/Task'
import AppContext from '../context/AppContext';
import useTask from '../hooks/useTask'


function Tasks() {

    const context = useContext(AppContext);

    const {getTasks} = useTask()
    const {loading, error, data} = getTasks

    if(loading) return <Loading />

    return (
        <>        
            <div className="container flex flex-col justify-center items-center">

                {error && <span>{error.message}</span>}

                <div className="w-3/4 flex flex-col bg-white shadow-md rounded p-4 gap-y-4">

                    <div className=" w-full text-center inline-block">
                        <h1 className="font-medium text-2xl">My Task List</h1>
                    </div>

                    {data.userTasks < 0 && <span className='text-sm text-black'>You have 0 task</span> }

                    <ul className='flex flex-col gap-y-3'>
                    {data.userTasks.map((task: ITask) => {
                        return <li key={task.id}><Task task={task} /></li>
                    })}
                    </ul>
                    
                </div>
                
            </div>
                
            {context?.modal.isOpen && <Modal />}
        </>

    )
}

export default Tasks