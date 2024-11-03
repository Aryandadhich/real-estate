import './App.css';
import "./Design/layout.scss"
import Navbar  from './components/Navbar/Navbar'
import HomePage from './routes/HomePage/HomePage';

function App() {
  return (
    <div className='layout'>
      <div className='navbar'>
        
      <Navbar/>
      </div>
      <div className='content'>

      <HomePage/>
      </div>
      
    </div>
  );
}

export default App;
