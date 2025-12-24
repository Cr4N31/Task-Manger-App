
function TaskFilter({onFilter}) {

    return(
        <div className="flex gap-2">
            <button className="transition-all ease focus:bg-black bg-black/70 p-2 rounded-md text-white" onClick={() => onFilter('all')}>All Tasks</button>
            <button className="transition-all ease focus:bg-black bg-black/70 p-2 rounded-md text-white"  onClick={() => onFilter('completed')}>Completed Tasks</button>
            <button className="transition-all ease focus:bg-black bg-black/70 p-2 rounded-md text-white" onClick={() => onFilter('pending')}>Pending Tasks</button>
        </div>
    )

}

export default TaskFilter;