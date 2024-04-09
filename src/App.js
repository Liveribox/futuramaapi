import './App.css';
import { FuturamaGrid } from './components/FuturamaGrid';
import { LoginForm } from './components/LoginForm';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";


//<FuturamaGrid/>

export const  App = () => {

  return(
    <>
      <Router>
        <Routes>
          <Route path='/' Component={LoginForm}></Route>
          <Route path='/futugrid' Component={FuturamaGrid}></Route>
        </Routes>
      </Router>
    </>
  )

  
}