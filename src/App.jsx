import { RouterProvider }  from 'react-router-dom';
import router from './routes/Page_router'
import { Header, Footer } from './components/inc.jsx';
import DropdownMenu from './s/Hda.jsx';

function App() {
  return (
    <>
      <Header/>
      {/* <DropdownMenu /> */}
      <RouterProvider router={router} />
      <Footer />
    </>
  )
}

export default App