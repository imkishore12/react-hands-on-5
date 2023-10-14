
import './App.css';
import HOC1 from './Components/HOC1';
import HigherOrderFunction from './Components/HigherOrderFunction';

import PureComponents from './Components/PureComponent';

function App() {
  return (
    <div className="App">
     
      
      <PureComponents />
      <hr></hr>
      <HOC1 />
      <HigherOrderFunction value={HOC1}/>
     
      
     
    </div>
  );
}

export default App;
