import './App.css';
import Labs from "./labs";
import Tuiter from "./tuiter";
import {BrowserRouter} from "react-router-dom";
import {Routes, Route} from "react-router";
import Assignment6 from "./labs/a6";
import Assignment7 from "./labs/a7";

function App() {
  return (
      <BrowserRouter>
        <div className="container mt-2">
          <Routes>
            <Route index
                   element={<Labs/>}/>
            <Route element={<Assignment6/>}/>
            <Route path="/a7/*"
                   element={<Assignment7/>}/>
            <Route path="/tuiter/*"
                   element={<Tuiter/>}/>
          </Routes>
        </div>
      </BrowserRouter>
  );
}

export default App;