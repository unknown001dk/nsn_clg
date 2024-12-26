import { BrowserRouter } from 'react-router-dom'; // Use BrowserRouter for routing
import { Footer } from './components/inc.jsx';
import { ToastContainer } from 'react-toastify';
import AppRoutes from './routes/Page_router';
import 'react-toastify/dist/ReactToastify.css';
import Header from './utils/Header.jsx';
import BottomNavbar from './components/BottomNavbar/BottomNavbar.jsx';

function App() {
  return (
    <>
      <ToastContainer />
      <BrowserRouter> {/* Wrap the app in BrowserRouter for routing */}
      <Header />
        <AppRoutes /> 
      </BrowserRouter>
      <BottomNavbar />
      <Footer />
    </>
  );
}

export default App;
  