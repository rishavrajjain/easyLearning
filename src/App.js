import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Home from './components/Home';
import Navbar from './components/layout/Navbar';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <Router>
    <Navbar/>
    <div className="container">
    <ToastContainer />
      <Switch>
        <Route exact path="/dashboard" component={Dashboard}></Route>
        <Route exact path="/" component={Home}></Route>
      
      </Switch>

      
    </div>
    </Router>
  );
}

export default App;
