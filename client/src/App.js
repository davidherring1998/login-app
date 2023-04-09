import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./components/Header";
import Footer from './components/Footer'
import Login from './pages/login'
import Register from './pages/register';

function App() {
  return (
    <>
      <Header />
      <Register />
      <Router>
        <Routes>
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
