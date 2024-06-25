import './App.css';
import StatefulGreeting from './components/StatefulGreeting';

function App() {
  return (
    <div className="App">
      <StatefulGreeting greeting="This is now the greeting as a prop"/>
    </div>
  );
}

export default App;
