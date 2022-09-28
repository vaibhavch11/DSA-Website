import { Home } from "./pages/Home/Home";
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
 
      <BrowserRouter>
         <Routes>
          
           <Route path="/" element={<Home />}></Route>
     
           <Route path="/:id" element={<Topic />}></Route>
           
        
           
           
           

           {/* <Route path="/">
            <Route index element={<Home />} />

            <Route path=":DP">
              <Route path=":id" element={<Recursion />}></Route>
            </Route>

            <Route path="Graph">
              <Route path=":id" element={<Recursion />}></Route>
            </Route>

            <Route path="Tree">
              <Route path=":id" element={<Recursion />}></Route>
            </Route>

            <Route path="LinkedList">
               <Route path=":id" element={<Recursion />}></Route>
            </Route>
            
          </Route> */}

         </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
