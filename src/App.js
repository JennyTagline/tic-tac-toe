import './App.css';
import './format.css'
import ConnectProps from './Component/Redux/ConnectProps'
import HomePage from './Component/HomePage'
import { BrowserRouter as Router, Route } from "react-router-dom"

function App() {
  return (
    <div >
      <Router>
       <Route exact path="/" component={HomePage} />
        <Route exact path="/mainPage" component={ConnectProps} />
      </Router>
      </div>
  );
}

export default App;
