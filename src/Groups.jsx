import { useState } from "react"
import { Link } from "react-router-dom"

function Groups({
  groups,
  tasks,
  addGroup,
}) {

  // Stores group name input
  const [name, setName] =
    useState("")

  function handleSubmit(event) {

    event.preventDefault()

    addGroup(name)

    setName("")
  }

  return (
    <main className="max-w-4xl mx-auto p-6">

      <h1 className="text-3xl font-bold mb-5">
        Task Groups
      </h1>

      {/* Add group */}
      <form
        onSubmit={handleSubmit}
        className="bg-white border p-4 rounded mb-5"
      >

        <input
          type="text"
          placeholder="Enter group name"
          value={name}
          onChange={(event) =>
            setName(
              event.target.value
            )
          }
          className="border p-2 rounded w-full mb-3"
        />

        <button className="bg-blue-600 text-white px-4 py-2 rounded">
          Add Group
        </button>

      </form>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

        {groups.map(
          (group) => {

            // Count tasks inside this group
            const count =
              tasks.filter(
                (task) =>
                  task.groupId ===
                  group.id
              ).length

            return (
              <div
                key={group.id}
                className="bg-white border p-4 rounded"
              >

                <h2 className="text-xl font-bold">
                  {group.name}
                </h2>

                <p className="mb-3">
                  Tasks: {count}
                </p>

                <Link
                  to={`/groups/${group.id}`}
                  className="text-blue-600 underline"
                >
                  Open Group
                </Link>

              </div>
            )
          }
        )}

      </div>

    </main>
  )
}

export default Groups