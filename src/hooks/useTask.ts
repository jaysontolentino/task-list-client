import { useMutation, useQuery } from "@apollo/client"
import { ADD_TASK, COMPLETE_TASK, DELETE_TASK, UPDATE_TASK } from "../graphql/mutations"
import { GET_TASK, TASKS } from "../graphql/queries"

function useTask(id?: any) {

    const getTasks = useQuery(TASKS)

    const useGetTask = (id: string | number | undefined) => {
        const task = useQuery(GET_TASK, {
            variables: {
                id
            }
        })

        return task
    }
    
    const [addTask] = useMutation(ADD_TASK, {
        update(cache, {data}) {

            const newTask = data.addTask

            const existingTasks = cache.readQuery({
                query: TASKS
            }) as any


            cache.writeQuery({
                query: TASKS,
                data: {
                    userTasks: [
                        ...existingTasks?.userTasks,
                        newTask
                    ]
                }
            })
        }
    })

    const [updateTask] = useMutation(UPDATE_TASK)

    const [completeTask] = useMutation(COMPLETE_TASK)

    const [deleteTask] = useMutation(DELETE_TASK, {
        refetchQueries: [
            {query: TASKS},
            'UserTasks'
        ]
    })

    return {
        getTasks,
        useGetTask,
        addTask,
        updateTask,
        completeTask,
        deleteTask
    }
}

export default useTask