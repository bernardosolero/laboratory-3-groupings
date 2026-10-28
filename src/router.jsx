import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom"

import Navbar from "./Navbar"

import Home from "./Home"
import Groups from "./Groups"
import GroupTasks from "./GroupTasks"
import Guide from "./Guide"
import Developers from "./Developers"

function AppRouter({
  tasks,
  groups,
  addTask,
  toggleTask,
  deleteTask,
  clearDone,
  addGroup,
}) {

  return (
    <BrowserRouter>

      {/* Navbar appears on every page */}
      <Navbar />

      {/* Website routes */}
      <Routes>

        <Route
          path="/"
          element={
            <Home
              tasks={tasks}
              groups={groups}
              addTask={addTask}
              toggleTask={toggleTask}
              deleteTask={deleteTask}
              clearDone={clearDone}
            />
          }
        />

        <Route
          path="/home"
          element={
            <Home
              tasks={tasks}
              groups={groups}
              addTask={addTask}
              toggleTask={toggleTask}
              deleteTask={deleteTask}
              clearDone={clearDone}
            />
          }
        />

        <Route
          path="/groups"
          element={
            <Groups
              groups={groups}
              tasks={tasks}
              addGroup={addGroup}
            />
          }
        />

        {/* Dynamic route */}
        <Route
          path="/groups/:groupId"
          element={
            <GroupTasks
              groups={groups}
              tasks={tasks}
              addTask={addTask}
              toggleTask={toggleTask}
              deleteTask={deleteTask}
            />
          }
        />

        <Route
          path="/guide"
          element={<Guide />}
        />

        <Route
          path="/developers"
          element={<Developers />}
        />

      </Routes>

    </BrowserRouter>
  )
}

export default AppRouter