import {Link} from "react-router-dom";
function Navbar() {
return (
    <ul>
    <li>
        <Link to="/">Home</Link>
    </li>
    <li>
        <Link to="/teste_1">Teste da rota 1</Link>
    </li>
    <li>
        <Link to="/teste_2">Teste da rota 2</Link>
    </li>
    </ul>
)
}
export default Navbar;