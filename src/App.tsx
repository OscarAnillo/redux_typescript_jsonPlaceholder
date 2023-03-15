//import { SimpleApiCallComponent } from './Components/ApiCall-component';
import { ApiCallWithId } from './Components/ApiCall-withId';

import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Oscar Anillo</h1>
      <p>Web UI Developer</p>
      {/* <SimpleApiCallComponent /> */}
      <ApiCallWithId />
    </div>
  );
}

export default App;
