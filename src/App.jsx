import { useState, useEffect } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import TaskFilter from './components/TaskFilter';
function App() {
  const [tasks, setTasks] = useState([]);
  const [editingTask, setEditingTask] = useState(null);
  const [filter, setFilter] = useState('all');

  const filteredTasks = tasks.filter(task => {
    if (filter === 'all') return true;
    if (filter === 'completed') return task.isCompleted;
    if (filter === 'pending') return !task.isCompleted;
    return true; // for 'all' filter
  });

    
  function handleFilter(type) {
    setFilter(type);
  }

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(savedTasks);
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);



  function handleTaskSubmit(task) {
    setTasks(prev => [
      ...prev,
      { ...task, id: crypto.randomUUID() } // give each task a unique id
    ]);
  }

  function handleEditTask(task) {
    setEditingTask(task);
  }

  function handleUpdateTask(updatedTask) {
    setTasks(prev =>
      prev.map(task => (task.id === updatedTask.id ? updatedTask : task))
    );
    setEditingTask(null); // exit editing mode
  }


  function handleDeleteTask(id) {
    setTasks(prev => prev.filter(task => task.id !== id));
  }




  return (
    <div className="h-screen flex flex-col items-center gap-2 p-8 bg-gray-100">
      <h1 className='font-bold uppercase text-4xl'>Task App</h1>
      <TaskForm initialTask={editingTask} onSubmit={editingTask ? handleUpdateTask : handleTaskSubmit} />
      <TaskFilter tasks={tasks} onFilter={handleFilter} />
      <h2 className='font-bold uppercase text-2xl'>Task List</h2>
      <TaskList tasks={filteredTasks} onDelete={handleDeleteTask} onEdit={handleEditTask} />
    </div>
  );
}

export default App;
