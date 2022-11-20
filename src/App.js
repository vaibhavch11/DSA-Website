import { Home } from "./pages/home/Home";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Topic from "./pages/Topic/Topic";
import Sidebar from "./components/Sidebar/Sidebar";



function App() {
  return (
    <div className="App">
 
         <Routes>

          
           <Route path="/" element={<Home />}></Route>
     
           <Route path="/:id" element={<Topic />}></Route>
           


         </Routes>
    </div>
  );
}

export default App;
