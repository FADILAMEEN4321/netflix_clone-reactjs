import React from 'react'
import NavBar from './Components/Navbar/NavBar';
import './App.css'
import Banner from './Components/Banner/Banner';
import RowPost from './Components/RowPost/RowPost';
import {action,orginals,Documentary,Romance} from './urls';
import BottomFooter from './Components/Bottomfooter/BottomFooter';



function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/> 
      <RowPost url= {orginals} title='Netflix Orginals' />
      <RowPost url= {action} title='Action' isSmall />
      <RowPost url= {Documentary} title='Documentary' isSmall />
      <RowPost url= {Romance} title='Romance' isSmall />
      <BottomFooter/>
    </div>
  );
}

export default App;
