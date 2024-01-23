
import './App.css';
import HelloWorld from './components/HelloWorld';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import Frase from './components/Frase';
import List from './components/List';

function App() {

  const name = "Jova";
  return (
    <div className="App">
    <HelloWorld/>
    <Frase />
    <SayMyName name="Jonh"/>
    <SayMyName name={name}/>
    <Pessoa foto="https://via.placeholder.com/150" nome="Nicolas Cage" idade="57" profissao="Ator"/>
    <List/>
    </div>
  );
}

export default App;
