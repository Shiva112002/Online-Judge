import './App.css';
import Login from './Components/Login';
import Author from './Components/Author';
import Problems from './Components/Problems';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProblemPage from './Components/ProblemPage';
import AddTestCase from './Components/AddTestCase';
import AddTestCasePage from './Components/AddTestCasePage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/problems" element={<Problems/>}/>
        <Route path="/problems/:problemId" element={<ProblemPage/>}/>
        <Route path="/author" element={<Author/>}/>
        <Route path="/addTestcase" element={<AddTestCase/>}/>
        <Route path="/addTestcase/:problemId" element={<AddTestCasePage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
