import { useState, useEffect } from 'react'
function TaskForm({ initialTask, onSubmit }) {
    const [task, setTask] = useState({
        id: initialTask?.id || null, // retrieve id from initialTask if it exists
        title: initialTask?.title || '', // retrieve title from initialTask if it exists
        description: initialTask?.description || '', // retrieve description from initialTask if it exists
        isCompleted: initialTask?.isCompleted || false // retrieve isCompleted from initialTask if it exists
    });

    useEffect(() => {
        if (initialTask) {
            setTask({
                id: initialTask.id,
                title: initialTask.title,
                description: initialTask.description,
                isCompleted: initialTask.isCompleted
            });
        }
    }, [initialTask]);

    function handleChange(e) {
        const { name, value, type, checked } = e.target;
        setTask(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }))
    }

    function handleSubmit(e) {

        e.preventDefault();
        // call onSubmit with the current task state if onSubmit exists
        onSubmit?.(task);
        // reset the form after submit
        if (!task.id) {
            setTask({ id: null, title: '', description: '', isCompleted: false });
        }
    }

    return (
        <form className="w-full max-w-md mx-auto" onSubmit={handleSubmit}>
            <div className="flex flex-col gap-4 p-4 border rounded-md shadow-sm bg-white">

                <label className="flex flex-col gap-1" htmlFor="title">
                    <span className="text-sm font-semibold text-gray-700">Title</span>
                    <input
                        className="border rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-black"
                        type="text"
                        id="title"
                        name="title"
                        value={task.title}
                        onChange={handleChange}
                    />
                </label>

                <label className="flex flex-col gap-1" htmlFor="description">
                    <span className="text-sm font-semibold text-gray-700">Description</span>
                    <textarea
                        className="border rounded px-3 py-2 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-black"
                        id="description"
                        name="description"
                        rows={4}
                        value={task.description}
                        onChange={handleChange}
                    />
                </label>

                <label className="flex items-center gap-2 text-sm text-gray-700">
                    <input
                        type="checkbox"
                        id="isCompleted"
                        name="isCompleted"
                        checked={task.isCompleted}
                        onChange={handleChange}
                        className="accent-black"
                    />
                    Completed
                </label>

                <button
                    type="submit"
                    disabled={!task.title.trim() || !task.description.trim()}
                    className="mt-2 rounded bg-black px-4 py-2 text-sm font-semibold text-white disabled:opacity-50 disabled:cursor-not-allowed hover:bg-white hover:text-black hover:border transition"
                >
                    Save Task
                </button>

            </div>
        </form>

    )
}

export default TaskForm