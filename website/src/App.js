import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Navigation from "./components/Navigation";

function App() {
  return (
    <div className="app container">
      <Router>
        <Navigation />
      </Router>
    </div>
  );
} 
export default App;
