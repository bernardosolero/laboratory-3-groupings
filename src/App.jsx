import { useState } from "react"
import AppRouter from "./router"

function App() {

  // Stores the task groups
  const [groups, setGroups] = useState([
    {
      id: "school",
      name: "School Activities",
    },
    {
      id: "personal",
      name: "Personal Tasks",
    },
  ])

  // Stores all tasks
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Study React",
      done: false,
      groupId: "school",
    },
    {
      id: 2,
      text: "Buy groceries",
      done: false,
      groupId: "personal",
    },
  ])

  // Add a new task
  function addTask(text, groupId) {

    // Prevent empty task
    if (text.trim() === "") return

    const newTask = {
      id: Date.now(),
      text: text,
      done: false,
      groupId: groupId,
    }

    setTasks([
      ...tasks,
      newTask,
    ])
  }

  // Change Done / Not Done
  function toggleTask(id) {

    setTasks(
      tasks.map((task) =>
        task.id === id
          ? {
              ...task,
              done: !task.done,
            }
          : task
      )
    )
  }

  // Delete one task
  function deleteTask(id) {

    setTasks(
      tasks.filter(
        (task) =>
          task.id !== id
      )
    )
  }

  // Delete all completed tasks
  function clearDone() {

    setTasks(
      tasks.filter(
        (task) =>
          task.done === false
      )
    )
  }

  // Add new group
  function addGroup(name) {

    if (name.trim() === "") return

    const newGroup = {
      id: Date.now().toString(),
      name: name,
    }

    setGroups([
      ...groups,
      newGroup,
    ])
  }

  return (
    <AppRouter
      tasks={tasks}
      groups={groups}
      addTask={addTask}
      toggleTask={toggleTask}
      deleteTask={deleteTask}
      clearDone={clearDone}
      addGroup={addGroup}
    />
  )
}

export default App