function Guide() {

  return (
    <main className="max-w-4xl mx-auto p-6">

      <h1 className="text-3xl font-bold mb-5">
        User Guide
      </h1>

      <div className="bg-white border p-5 rounded">

        <h2 className="font-bold">
          Create a Task
        </h2>

        <p className="mb-4">
          Enter a task, choose a group,
          then click Add Task.
        </p>

        <h2 className="font-bold">
          Create a Group
        </h2>

        <p className="mb-4">
          Go to Groups, enter a group name,
          then click Add Group.
        </p>

        <h2 className="font-bold">
          Done / Not Done
        </h2>

        <p className="mb-4">
          Click Done to complete the task.
          Click Not Done to change it back.
        </p>

        <h2 className="font-bold">
          Delete
        </h2>

        <p className="mb-4">
          Click Delete to remove a task.
        </p>

        <h2 className="font-bold">
          Navigation
        </h2>

        <p>
          Use the navigation links to move
          between pages and task groups.
        </p>

      </div>

    </main>
  )
}

export default Guide