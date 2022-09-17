import { Home } from "./pages/home/Home";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Recursion from "./pages/Recursion/Recursion";


function App() {
  return (
    <div className="App">
 
      <BrowserRouter>
         <Routes>
          
           <Route path="/" element={<Home />}></Route>
           <Route path="/:id" element={<Recursion />}></Route>

         </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
