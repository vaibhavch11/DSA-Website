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
import AddProblem from "./pages/addProblem/addProblem";



import ExcaliCarosule from "./components/ExcaliCarosule/ExcaliCarosule";
// import Carousel from "./components/test/test";



function App() {
  return (
    <div className="App">
 
         <Routes>

          

           <Route path="/" element={<Home />}></Route>
           <Route path="/textEditor" element={<Test />}></Route>
           <Route path="/excali" element={<ExcaliCarosule />}></Route>

           <Route path="/addProblem" element={<AddProblem />}></Route>
           {/* <Route path="/cars" element={<Carousel />}></Route> */}

           
           <Route path="/addTopic" element={<AddTopic />}></Route>
           <Route path="/:id" element={<Topic />}></Route>

           <Route path="signUp" element={<Signup />}></Route>
           


         </Routes>
    </div>
  );
}

export default App;
