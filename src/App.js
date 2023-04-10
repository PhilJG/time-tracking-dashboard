import './App.css';
import Profile from './components/Profile';
import Stat from './components/Stat';

function App() {
  return (
    <div className="App">
      <Profile className="profile" />
      <Stat />
      {/* <Stat className="work" />
      <Stat className="play" />
      <Stat className="study" />
      <Stat className="exercise" />
      <Stat className="social" />
      <Stat className="self-care" /> */}

      <div className="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
        Coded by <a href="https://philjgray.ca/">Phil J Gray</a>.
      </div>
    </div>
  );
}

export default App;
