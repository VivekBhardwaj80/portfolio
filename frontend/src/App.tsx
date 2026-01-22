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