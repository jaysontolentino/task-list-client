import Button from "./Button"

export interface ITask {
    id: string
    task: string
    description: string
    completed: boolean
    created_at?: Date
}

export const Task: React.FC<{task: ITask}> = ({task}) => {
    return (
        <div className="flex flex-col border py-3 px-2 rounded-md bg-slate-50 text-slate-700">
            <header className="font-medium text-xl border-b-2 py-2">{task.task}</header>

            <article className='py-2 text-sm'>{task.description}</article>

            <footer className='flex justify-between py-2 border-t-2'>
                <span className='text-xs italic'>July 28, 2022</span>

                <div className='flex gap-x-2'>
                    <Button xs="text-sm py-1 px-2" text="Mark as complete" />
                    <Button xs="text-sm py-1 px-2" text="Update" />
                    <Button xs="text-sm py-1 px-2" text="Delete" />
                </div>
            </footer>
        </div>
    )
}

export default Task