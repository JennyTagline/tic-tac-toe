import './App.css';
import './format.css'
import MainPage from './Component/MainPage';
import HomePage from './Component/HomePage'
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <div >
      <Router>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/mainPage" component={MainPage} />
      </Router>
      </div>
  );
}

export default App;
