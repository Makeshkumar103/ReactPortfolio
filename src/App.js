import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './Components/Home';
import Services from './Components/Services';
import About from './Components/About';
import Contact from './Components/Contact';
import Projects from './Components/Projects';
import '@fontsource/roboto';

function App() {
  return (
    <>
      <Home/>
      <About/>
      <Services/>
      <Projects />
      <Contact/>
    </>
    
  );
}

export default App;
