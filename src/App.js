import logo from './logo.svg';
import './App.css';
import MessageComponent from './components/viewmessage';
import { Outlet,Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
     <h2>Welcome to My App</h2>
   <nav><Link to="/home">Home</Link>|<Link to="/aboutus">About Us</Link></nav>
     <div>
      <Outlet/>
     </div>
    </div>
  );
}

export default App;
