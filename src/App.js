import './App.css';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header/>
      <Main/>
      {/* <Router>
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
      </Router> */}
      <Footer/>
    </div>
  );
}

export default App;
