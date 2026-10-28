import { useState } from "react"
import TaskItem from "./TaskItem"

function Home({
  tasks,
  groups,
  addTask,
  toggleTask,
  deleteTask,
  clearDone,
}) {

  // Stores typed task
  const [text, setText] =
    useState("")

  // Stores selected group
  const [groupId, setGroupId] =
    useState("school")

  function handleSubmit(event) {

    // Prevent page refresh
    event.preventDefault()

    addTask(
      text,
      groupId
    )

    // Clear input
    setText("")
  }

  // Count completed tasks
  const doneCount =
    tasks.filter(
      (task) =>
        task.done
    ).length

  // Count pending tasks
  const pendingCount =
    tasks.filter(
      (task) =>
        !task.done
    ).length

  return (
    <main className="max-w-4xl mx-auto p-6">

      <h1 className="text-3xl font-bold">
        Welcome to My To-Do List
      </h1>

      <p className="text-gray-600 mb-5">
        Manage your tasks and groups.
      </p>

      {/* Dashboard */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-5">

        <div className="bg-blue-100 p-4 rounded">
          <p>Total Tasks</p>

          <h2 className="text-2xl font-bold">
            {tasks.length}
          </h2>
        </div>

        <div className="bg-green-100 p-4 rounded">
          <p>Completed</p>

          <h2 className="text-2xl font-bold">
            {doneCount}
          </h2>
        </div>

        <div className="bg-yellow-100 p-4 rounded">
          <p>Pending</p>

          <h2 className="text-2xl font-bold">
            {pendingCount}
          </h2>
        </div>

      </div>

      {/* Add task form */}
      <form
        onSubmit={handleSubmit}
        className="bg-white border p-4 rounded mb-5"
      >

        <h2 className="text-xl font-bold mb-3">
          Add Task
        </h2>

        <input
          type="text"
          placeholder="Enter task"
          value={text}
          onChange={(event) =>
            setText(
              event.target.value
            )
          }
          className="border p-2 rounded w-full mb-3"
        />

        <select
          value={groupId}
          onChange={(event) =>
            setGroupId(
              event.target.value
            )
          }
          className="border p-2 rounded w-full mb-3"
        >

          {groups.map(
            (group) => (
              <option
                key={group.id}
                value={group.id}
              >
                {group.name}
              </option>
            )
          )}

        </select>

        <button className="bg-blue-600 text-white px-4 py-2 rounded">
          Add Task
        </button>

      </form>

      <div className="flex justify-between items-center mb-4">

        <h2 className="text-xl font-bold">
          All Tasks
        </h2>

        <button
          onClick={clearDone}
          className="bg-gray-600 text-white px-3 py-2 rounded"
        >
          Clear Done
        </button>

      </div>

      {/* Display tasks */}
      {tasks.map(
        (task) => (
          <TaskItem
            key={task.id}
            task={task}
            toggleTask={toggleTask}
            deleteTask={deleteTask}
          />
        )
      )}

    </main>
  )
}

export default Home