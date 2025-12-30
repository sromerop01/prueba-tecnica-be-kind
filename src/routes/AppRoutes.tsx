import { useRoutes } from "react-router-dom"
import { routes } from "./routes"

const AppRoutes: React.FC = () => {
  return useRoutes(routes)
}

export default AppRoutes