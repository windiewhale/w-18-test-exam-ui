import React from 'react';
import Navbar from './components/Navbar';
import Button from './components/Button';
import Beercard from './components/Beercard';
import Cardcontainer from './components/Cardcontainer';

/* const theme = createTheme({
  palette: {
    primary: {
      main: '#ffeedf'
    },
    secondary: {
      main: '#145434'
    }
  }
}) */

function App() {
  return (
    <div className="app">
      <Navbar />
      <Cardcontainer />
    </div>
    
  );
}

export default App;
