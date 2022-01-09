import logo from './logo.svg';
import './App.css';
import ClassCounter from './components/ClassCounter'
import HookCounter from './components/HookCounter';
import HookCounterTwo from './components/HookCounterTwo';
import HookCounterThree from './components/HookCounterThree';
import HookCounterFour from './components/HookCounterFour';
import HookCounterOne from './components/HookCounterOne';
import ClassCounterOne from './components/ClassCounterOne';

function App() {
  return (
    <div className="App">
      {/* <ClassCounter /> */}
      {/* <HookCounter /> */}
      {/* <HookCounterTwo /> */}
      {/* <HookCounterThree /> */}
      {/* <HookCounterFour /> */}

      {/* <ClassCounterOne /> */}
      <HookCounterOne />
    </div>
  );
}

export default App;
