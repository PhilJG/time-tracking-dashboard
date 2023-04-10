import './App.css';
import Profile from './components/Profile';
import Stat from './components/Stat';

function App() {
  return (
    <div className="App">
      <Profile className="profile" />
      <Stat className="work" title="Work" />
      <Stat className="play" title="Play" />
      <Stat className="study" title="Study" />
      <Stat className="exercise" title="Exercise" />
      <Stat className="social" title="Social" />
      <Stat className="self-care" title="self-care" />

      <div class="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
        Coded by <a href="#">Your Name Here</a>.
      </div>
    </div>
  );
}

export default App;
