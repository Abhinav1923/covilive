import './App.css';
import Data from './components/Data/Data';
import Header from './components/Header/Header';
import { BrowserRouter as Router } from "react-router-dom";
import Intro from './components/Intro/Intro';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <Router>
        <Header />
        <Intro />
        <Data />
        <Footer />
      </Router>
    </>
  );
}

export default App;
