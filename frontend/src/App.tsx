// import {BrowserRouter as Router} from 'react-router-dom'
import AdminRoutes from "./routes/AdminRoutes"
import PublicRoutes from "./routes/PublicRoutes"

const App = () => {
  return (
    <>
      <PublicRoutes />
      <AdminRoutes />
    </>
  )
}

export default App