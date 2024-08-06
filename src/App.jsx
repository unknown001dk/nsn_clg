import { RouterProvider }  from 'react-router-dom';
import { Header, Footer } from './components/inc.jsx';
import { ToastContainer } from 'react-toastify';
import router from './routes/Page_router'
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <ToastContainer />
      <Header/>
      <RouterProvider router={router} />
      <Footer />
    </>
  )
}

export default App