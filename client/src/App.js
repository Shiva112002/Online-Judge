import './App.css';
import Login from './Components/Login';
import Author from './Components/Author';
import Problems from './Components/Problems';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProblemPage from './Components/ProblemPage';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/problems" element={<Problems/>}/>
        <Route path="/problems/:problemName" element={<ProblemPage/>}/>
        <Route path="/author" element={<Author/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
