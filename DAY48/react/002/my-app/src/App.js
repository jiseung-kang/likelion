import Hello from './Components/Hello';
import Time from './Components/Time';
import './App.css';
import Body from './Components/Body';
import Resume from './Components/Resume'

function App() {
  return (
    <div>
      <Hello name="gary" age="10" />
      <Time />
      <Body />
      <Resume hello="hihi" name="nero" hobby="sleep" food="salmon" color="whitesmoke" />
    </div>
  );
}

export default App;