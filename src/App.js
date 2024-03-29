import './App.css';
import { useState } from 'react'
import Profile from './components/Profile';
import Stat from './components/Stat';

function App() {
  const [recurrance, setRecurrance] = useState('weekly')

  const recurring = ["daily", "weekly", "monthly"]

  const rBtns = recurring.map(rec =>
    <button className='time-selection' onClick={() => rec !== recurrance ? setRecurrance(rec) : null}> {rec}</button >
  )

  return (
    <div className="App">
      <Profile rBtns={rBtns} />

      <Stat className="grid"
        recurrance={recurrance} />

      {/* <div className="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
        Coded by <a href="https://philjgray.ca/">Phil J Gray</a>.
      </div> */}
    </div >
  );
}

export default App;
