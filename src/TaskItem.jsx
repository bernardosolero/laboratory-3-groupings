function TaskItem({
  task,
  toggleTask,
  deleteTask,
}) {

  return (
    <div className="bg-white border p-4 mb-3 rounded">

      {/* Task name */}
      <p
        className={
          task.done
            ? "line-through text-gray-400"
            : "text-black"
        }
      >
        {task.text}
      </p>

      {/* Task status */}
      <p className="text-sm mb-3">
        Status:{" "}
        {task.done
          ? "Done"
          : "Not Done"}
      </p>

      {/* Change status */}
      <button
        onClick={() =>
          toggleTask(task.id)
        }
        className="bg-green-500 text-white px-3 py-2 mr-2 rounded"
      >
        {task.done
          ? "Not Done"
          : "Done"}
      </button>

      {/* Delete task */}
      <button
        onClick={() =>
          deleteTask(task.id)
        }
        className="bg-red-500 text-white px-3 py-2 rounded"
      >
        Delete
      </button>

    </div>
  )
}

export default TaskItem