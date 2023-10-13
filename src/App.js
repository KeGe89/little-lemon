import './App.css';
import Footer from './components/Footer';
import  Main from './components/Main';
import Nav from './components/Nav';
import Menu from './components/Menu';
import { BrowserRouter as Router } from 'react-router-dom'; // Hier wird der Router importiert

function App() {
  return (
    <>
      <Nav/>
      <Router> {/* Hier wird der Router um die Main-Komponente gewickelt */}
        <Main />
      </Router>
      <Menu/>
      <Footer/>
    </>
  );
}

export default App;
