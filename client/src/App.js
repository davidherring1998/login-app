import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./components/Header";
import Footer from './components/Footer'
function App() {
  return (
    <>
      <Header />
      <Router>
        <Routes>
          <Route />
          <Route />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
