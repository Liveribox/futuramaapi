import logo from './logo.svg';
import './App.css';
import { getItems } from './heplers/getItems';
import { FuturamaGrid } from './components/FuturamaGrid';
import { useState } from 'react';


export const  App = () => {

  //const [ categories, setCategories ] = useState([ 'One Punch' ]);

  return(
    
    <>
      <FuturamaGrid/>
    </>

  )


}

