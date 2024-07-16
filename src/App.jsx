import { RouterProvider }  from 'react-router-dom';
import router from './routes/Page_router'

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App