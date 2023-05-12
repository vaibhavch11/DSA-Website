import { Home } from "./pages/home/Home";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Topic from "./pages/Topic/Topic";
import Sidebar from "./components/Sidebar/Sidebar";
import Signup from "./pages/Signup/Signup";

import AddTopic  from "./pages/AddTopic/addTopic";
import AddProblem from "./pages/addProblem/addProblem";
import Login from "./pages/Login/Login";


import ExcaliCarosule from "./components/ExcaliCarosule/ExcaliCarosule";

import AutocompleteSearch from "./components/SearchBar/searchBar";

// import Carousel from "./components/test/test";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

import { Provider } from "react-redux";

import Navbar from "./components/Navbar/Navbar";
import Problem from "./pages/Problem/Problem";




function App() {
  return (
    <div className="App">
         
         {/* <Navbar /> */}
         <Routes>

           <Route path="/" element={<Home />}></Route>
           <Route path="/problem" element={<Problem />}></Route>
           {/* <Route path="/textEditor" element={<Test />}></Route> */}

           {/* <Route path="/excali" element={<ExcalidrawComp />}></Route> */}

           <Route path="/addProblem" element={<AddProblem />}></Route>
           {/* <Route path="/cars" element={<Carousel />}></Route> */}
           <Route path="/login" element={<Login />}></Route>

           
           <Route path="/addTopic" element={<AddTopic />}></Route>
           <Route path="/:id" element={<Topic />}></Route>
           <Route path="/newUser" element={Signup}></Route>

           <Route path="signUp" element={<Signup />}></Route>
           <Route path="/searchBar" element={<AutocompleteSearch />}></Route>

           


         </Routes>
    </div>
  );
}

export default App;
