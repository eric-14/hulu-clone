import React, { useState } from 'react';
import Nav from './Nav'
import Results from './Results'
import './App.css';
import Header from './Header'
import keys from './keys'
function App() {
  const [selectedOption, setSelectedOption] = useState(keys.fetchTrending)
  return (
    
    <div className="App">


     
      <Header/>
      <Nav setSelectedOption={setSelectedOption}/>

      <Results selectedOption={selectedOption} />
    
    </div>
  );
}

export default App;
