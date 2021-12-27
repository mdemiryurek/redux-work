import { useState } from 'react';
import './App.css';
import NooView from './components/NooView';
import { DooViewContainer } from './containers/DooViewContainer';
import { FooViewContainer } from './containers/FooViewContainer';

function App() {

  const [year, setYear] = useState(2010);

  const handleChange = (e) => {
    const val = e.target.value;
    if(!isNaN(val))
      setYear(val);
  }
  return (
    <div className="App">
      <header className="App-header">
        redux-work
      </header>

      <FooViewContainer year={year}></FooViewContainer>
      <DooViewContainer handleChange={handleChange}
        year={year}></DooViewContainer>
      <NooView></NooView>
    </div>
  );
}

export default App;
