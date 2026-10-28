import { useState } from "react"

import {
  Link,
  useParams,
} from "react-router-dom"

import TaskItem from "./TaskItem"

function GroupTasks({
  groups,
  tasks,
  addTask,
  toggleTask,
  deleteTask,
}) {

  // Get groupId from URL
  const { groupId } =
    useParams()

  const [text, setText] =
    useState("")

  // Find selected group
  const group =
    groups.find(
      (group) =>
        group.id === groupId
    )

  // Get only tasks from selected group
  const groupTasks =
    tasks.filter(
      (task) =>
        task.groupId === groupId
    )

  function handleSubmit(event) {

    event.preventDefault()

    // Automatically use current group
    addTask(
      text,
      groupId
    )

    setText("")
  }

  if (!group) {
    return (
      <main className="p-6">
        Group not found.
      </main>
    )
  }

  return (
    <main className="max-w-4xl mx-auto p-6">

      <Link
        to="/groups"
        className="text-blue-600 underline"
      >
        ← Back to Groups
      </Link>

      <h1 className="text-3xl font-bold mt-4 mb-5">
        {group.name}
      </h1>

      <form
        onSubmit={handleSubmit}
        className="bg-white border p-4 rounded mb-5"
      >

        <input
          type="text"
          placeholder="Add task to this group"
          value={text}
          onChange={(event) =>
            setText(
              event.target.value
            )
          }
          className="border p-2 rounded w-full mb-3"
        />

        <button className="bg-blue-600 text-white px-4 py-2 rounded">
          Add Task
        </button>

      </form>

      {/* Only selected group's tasks */}
      {groupTasks.map(
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

export default GroupTasks