import './App.css';
import Count from './Components/Count';
import Greeter from './Components/Greeter';
import MoodToggler from './Components/MoodToggler';
import RandomNum from './Components/RandomNum';

function App() {
  return (
    <div className='app'>
    <h3>Basic React Exercises For Beginners</h3>
    <Count />
    <RandomNum />
    <MoodToggler />
    <Greeter name="Jesus Hector" age='23' excitmentLevel={5} />
    <Greeter name="Buja" age='24' excitmentLevel={4} />
    <Greeter name="memo" /> 
    </div>
  );
}

export default App;
