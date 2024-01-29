import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./components/pages/Home";
import Empresa from "./components/pages/Empresa";
import Contato from "./components/pages/Contato";

function App() {


  return (
  <Router>
    <ul>
      <li>
        <Link to = "/">Home</Link>
      </li>
      <li>
        <Link to = "/empresas">Empresa</Link>
      </li>
      <li>
        <Link to = "/contato">Contato</Link>
      </li>
    </ul>
    <Route path='/' exact element={<Home />}></Route>
    <Route path='/empresas' exact element={<Empresa />}></Route>
    <Route path='/contato' exact element={<Contato />}></Route>
  </Router>
  );
}

export default App;
