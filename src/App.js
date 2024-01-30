import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import Navbar from "./components/NavBar";
import Teste from "./components/pages/Teste_1";
import Teste2 from "./components/pages/Teste_2";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/teste_1' element={<Teste />} />
        <Route exact path='/teste_2' element={<Teste2 />} />
      </Routes>
    </Router>
  );
}

export default App;