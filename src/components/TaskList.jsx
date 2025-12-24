
function TaskList({tasks, onDelete, onEdit}) {
    return(
        
        <div className="overflow-scroll max-w-md text-center">
            <div className="flex-1">
                <ul className="flex flex-col gap-2">
                    {tasks.map(task => (
                        <li key={task.id}>
                            <h3 className="font-bold uppercase">{task.title}</h3>
                            <p>{task.description}</p>
                            <p className="italic">Status: <span className={task.isCompleted ? 'text-green-300' : 'text-red-500'}>{task.isCompleted ? 'Completed' : 'Pending'}</span></p>
                            <button className="bg-gray-400 p-2" onClick={() => onEdit(task)}>Edit</button>
                            <button className="bg-red-500 p-2 text-white" onClick={() => onDelete(task.id)}>Delete</button>
                        </li>
                        ))}
                </ul>
            </div>

        </div>
    )
}

export default TaskList;