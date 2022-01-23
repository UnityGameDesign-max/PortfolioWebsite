import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from "./pages/Home.js";


function App() {
  return (
    <div className="app container">
      <Router>
        <Home />
      </Router>
    </div>
  );
} 
export default App;
