import { Home } from "./pages/home/Home";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Topic from "./pages/Topic/Topic";
import Sidebar from "./components/Sidebar/Sidebar";
import Signup from "./pages/Signup/Signup";
import Test from "./pages/test/test";
import AddTopic  from "./pages/AddTopic/addTopic";



function App() {
  return (
    <div className="App">
 
         <Routes>

          
           <Route path="/" element={<Home />}></Route>
           <Route path="/textEditor" element={<Test />}></Route>
           
           <Route path="/addTopic" element={<AddTopic />}></Route>
           <Route path="/:id" element={<Topic />}></Route>

           <Route path="signUp" element={<Signup />}></Route>
           


         </Routes>
    </div>
  );
}

export default App;
