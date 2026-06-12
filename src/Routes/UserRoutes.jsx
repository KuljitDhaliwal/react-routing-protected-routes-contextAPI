import Dashboard from "../Pages/User/Dashboard";
import Projects from "../Pages/User/Projects";
import Report from "../Pages/User/Report";
import Team from "../Pages/User/Team";

export const userRoutes = [
  {
    path: "dashboard",
    element: <Dashboard />
  },
  {
    path: "report",
    element: <Report />
  },
  {
    path: "projects",
    element: <Projects />
  },
  {
    path: "team",
    element: <Team />
  }
]