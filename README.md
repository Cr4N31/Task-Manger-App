# Task App

A modern, interactive Task Management application built with **React**.  
This project demonstrates state management, reusable components, conditional rendering, filtering logic, and persistence using `localStorage`.

---

## 🚀 Features

- **Add Tasks** – Create new tasks with title, description, and completion status.
- **Edit Tasks** – Update existing tasks seamlessly.
- **Delete Tasks** – Remove tasks with a single click.
- **Filter Tasks** – View all, completed, or pending tasks.
- **Persistent Storage** – Tasks remain saved across browser refreshes using `localStorage`.
- **Responsive Design** – Flexible layout for different screen sizes (built with Tailwind CSS).

---

## 📂 Component Breakdown

### `App.jsx` – Root Component

**Purpose:**  
Central hub managing application state and business logic.

**Responsibilities:**
- Maintains global state for tasks, editing task, and current filter.
- Handles adding, updating, deleting, and filtering tasks.
- Loads and saves tasks to `localStorage` for persistence.
- Passes state and handlers to child components via props.

**Key Skills Demonstrated:**  
State management, `useEffect`, `useState`, prop drilling, React best practices.

---

### `TaskForm.jsx` – Task Creation & Editing

**Purpose:**  
Controlled form component for adding or editing tasks.

**Responsibilities:**
- Handles form inputs and local form state.
- Supports both create and edit modes.
- Validates required fields before submission.
- Sends task data back to `App` on submit.

**Key Skills Demonstrated:**  
Controlled components, form handling, conditional logic, reusability.

---

### `TaskList.jsx` – Task Display

**Purpose:**  
Displays tasks in a scrollable, organized list.

**Responsibilities:**
- Renders task details: title, description, and completion status.
- Provides Edit and Delete buttons for each task.
- Delegates actions back to `App` via callbacks.

**Key Skills Demonstrated:**  
Conditional rendering, mapping arrays to JSX, component communication via props.

---

### `TaskFilter.jsx` – Task Filtering

**Purpose:**  
Provides UI to filter tasks by completion status.

**Responsibilities:**
- Lets users switch between "All", "Completed", and "Pending" tasks.
- Triggers state updates in `App` to filter the task list dynamically.

**Key Skills Demonstrated:**  
Event handling, prop callbacks, modular component design.

---

## 📝 Task Object Structure

Each task has the following shape:

```js
{
  id: string,
  title: string,
  description: string,
  isCompleted: boolean
}
```

---

## 🔄 Data Flow

1. User interacts with `TaskForm` or `TaskFilter`.
2. Actions trigger callbacks passed from `App`.
3. `App` updates global state (`tasks`, `editingTask`, `filter`).
4. Updated state flows down to `TaskList` and other components.
5. Tasks persist via `localStorage` across sessions.

---

## 💻 Tech Stack

- **React** – Frontend library for building UI components.
- **Tailwind CSS** – Utility-first CSS framework for styling.
- **JavaScript (ES6+)** – Modern JavaScript features for clean, maintainable code.
- **LocalStorage API** – Browser storage for persistent state.

---

## 📌 Future Improvements

- Add **drag-and-drop** for task reordering.
- Include **search functionality** for tasks.
- Integrate **backend API** for multi-device persistence.
- Add **unit and integration tests** with Jest/React Testing Library.

