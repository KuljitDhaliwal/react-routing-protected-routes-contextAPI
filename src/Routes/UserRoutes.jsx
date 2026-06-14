import Dashboard from "../Pages/User/Dashboard";
import Projects from "../Pages/User/Projects";
import Report from "../Pages/User/Report";
import Team from "../Pages/User/Team";

export const userRoutes = [
  {
    path: "user/dashboard",
    element: <Dashboard />
  },
  {
    path: "user/report",
    element: <Report />
  },
  {
    path: "user/projects",
    element: <Projects />
  },
  {
    path: "user/team",
    element: <Team />
  }
]