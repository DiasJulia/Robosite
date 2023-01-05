import './App.css'
import {Router} from './routes'
import { BrowserRouter } from 'react-router-dom';
import {Navbar} from './components';

function App() {

  return (
    <BrowserRouter>
      <Navbar/>
      <Router/>
    </BrowserRouter>
  )
}

export default App
