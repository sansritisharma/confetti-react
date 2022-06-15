import logo from './logo.svg';
import './App.css';
import Confetti from 'react-confetti';
import Button from '@mui/material/Button';

function App() {
  return (
    <div className="App">
     <h1 className="Bigbutt">Hello, Sana!</h1>
     <div>
     <Button variant="contained">Contained</Button>
     </div>
      <Confetti />
    </div>
  );
}

export default App;

