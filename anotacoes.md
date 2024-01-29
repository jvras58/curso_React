# [Aula 3: Entendendo o JSX](https://www.youtube.com/watch?v=9iKNxnFJY_Q&list=PLnDvRpP8BneyVA0SZ2okm-QBojomniQVO&index=3&pp=iAQB)

O JSX é uma extensão de sintaxe para JavaScript. Ele é semelhante ao HTML e é a principal maneira de escrever HTML com React. 

## O que é JSX?

JSX é uma sintaxe que permite escrever HTML dentro do código JavaScript. Aqui está um exemplo de um componente React escrito com JSX:

```javascript
function App() {
  return (
    <div className="App">
    <h2>Alterando JSX</h2>
    </div>
  );
}

export default App;
```

## Características do JSX

### Interpolação de Variáveis

No JSX, podemos interpolar variáveis, inserindo-as entre chaves `{}`. No exemplo, a variável `name` é interpolada na propriedade `name`.

```javascript
function App() {
    //poderia ser algo mais complexo como pegar no banco de dados.... poderia processa-lo tambem como uppercase() ou estruturas condicionais como soma ou if else...
    const name = 'jvras'
    
  return (
    <div className="App">
    <p>olá,{name}</p>
    </div>
  );
}

export default App;
```

### Execução de Funções

É possível executar funções dentro do JSX. Essas funções podem ser chamadas dentro de eventos de componentes, como `onClick` ou `onChange`.

### Inserção de Valores em Atributos de Tags

Valores podem ser inseridos em atributos de tags no JSX. No exemplo a seguir, a tag <img> recebe um atributo src com uma URL.

```javascript
function App() {
  const url= "https://via.placeholder.com/150"
  
  return (
    <div className="App">
    <img src={url} alt="imagem" />
    </div>
  );
}

export default App;

```

## Resumo

- O `JSX` é como um HTML, Porém dentro do código JavaScript.
- É a principal maneira de escrever HMTL com o React.
- Podemos`interpolar variáveis`, inserindo ela entre `{}`.
- É possivel também `executar funções` em `JSX`.
- Inserir `valores em atributos de tags` também é válido em `JSX`.




# [Aula 4: Criando componentes no React](https://www.youtube.com/watch?v=-wrsG0IGc-M&list=PLnDvRpP8BneyVA0SZ2okm-QBojomniQVO&index=4&pp=iAQB)


Nesta aula, aprendemos a dividir a aplicação em partes menores, chamadas componentes, que podem ser reutilizadas em diferentes partes do código. 

## Criando Componentes

Os componentes são criados em arquivos separados, normalmente dentro de uma pasta chamada `components`. Veja um exemplo de um componente chamado `HelloWorld`:

```javascript
function HelloWorld() {
    return (
        <div>
            <h1>Hello World!</h1>
        </div>
    );
}

export default HelloWorld;
```

Este componente pode ser importado e utilizado em outros arquivos, como no `App.js`:

```javascript
import HelloWorld from './components/HelloWorld';

function App() {
    return (
        <div className="App">
            <HelloWorld/>
        </div>
    );
}

export default App;
```

## Reutilizando Componentes

Os componentes podem ser reutilizados em diferentes partes do código. Veja um exemplo de um componente chamado `Frase`:

```javascript
function Frase(){
    return(
        <div>
            <p>Eu sou uma frase</p>
        </div>
    )
}

export default Frase;
```

Este componente pode ser utilizado dentro do componente `HelloWorld`:

```javascript
import Frase from "./Frase";

function HelloWorld() {
    return (
        <div>
            <Frase />
            <h1>Hello World!</h1>
            <Frase />
        </div>
    );
}

export default HelloWorld;
```

Agora, o `App.js` renderiza o `HelloWorld` que, por sua vez, renderiza o `Frase`.

## Resumo

- Os componentes permitem dividir a aplicação em partes menores.
- Os componentes renderizam JSX, assim como o `App.js`.
- Cada componente deve ser criado em um arquivo separado.
- Os componentes devem ser importados onde serão utilizados.
- Os componentes normalmente ficam em uma pasta chamada `components`.





# [Aula 5: Trabalhando com props](https://www.youtube.com/watch?v=ZLtBdpwg8tI&list=PLnDvRpP8BneyVA0SZ2okm-QBojomniQVO&index=5&pp=iAQB)


Nesta aula, exploramos o conceito de `props` no React, que são valores passados de um componente para outro.

## O que são Props?

`Props` é a abreviação de propriedades. Elas são usadas para passar dados de um componente para outro, semelhante a como argumentos são passados para funções.

## Criando um Componente com Props

Vamos criar um componente chamado `SayMyName` que recebe `props`:

```javascript
function SayMyName(props){
    return(
        <div>
            <p>Nome: {props.nome}</p>
        </div>
    )
}

export default SayMyName;
```

Neste exemplo, `props` é um objeto que possui uma propriedade `nome`.

## Utilizando o Componente com Props

Agora, podemos usar o componente `SayMyName` no `App.js`, passando um valor para a prop `nome`:

```javascript
import SayMyName from './components/SayMyName';

function App() {
    return (
        <div className="App">
            <SayMyName nome="John"/>
        </div>
    );
}

export default App;
```

Neste exemplo, o componente `SayMyName` recebe a prop `nome` com o valor "John".

## Props Dinâmicas

Podemos tornar as props dinâmicas. Veja o exemplo de um componente chamado `Pessoa` que recebe um objeto de valores:

```javascript
function Pessoa({foto, nome, idade, profissao}){
    return(
    <div>
    <img src={foto} alt={nome} />
    <p>Nome: {nome}</p>
    <p>Idade: {idade}</p>
    <p>Profissão: {profissao}</p>
    </div>
    )
}
export default Pessoa;
```

```javascript
import Pessoa from './components/Pessoa';

function App() {
    return (
        <div className="App">
            <Pessoa foto="https://via.placeholder.com/150" nome="Nicolas Cage" idade="57" profissao="Ator"/>
        </div>
    );
}

export default App;
```

## Resumo

- Props são valores passados de um componente para outro.
- Elas são semelhantes a argumentos de função.
- As props podem ser dinâmicas.
- O valor é passado como um atributo na chamada do componente.
- O valor precisa ser resgatado dentro de uma propriedade/argumento chamada props na função de definição do componente.
- As props são somente de leitura!

# [Aula 6: Inserindo CSS no React ](https://www.youtube.com/watch?v=20hlPRPVMoU&list=PLnDvRpP8BneyVA0SZ2okm-QBojomniQVO&index=6&pp=iAQB)

## Adicionando CSS Globalmente

O CSS pode ser adicionado globalmente na aplicação, por meio do arquivo `index.css`, por exemplo. Este CSS será aplicado em toda a aplicação.

```css
body {
  padding: 50px;
  padding-bottom: 500px;
  background-color: #efefef;
}

h1 {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 20px;
}

p {
  font-size: 1.2rem;
  font-weight: 400;
  margin-bottom: 20px;
}
```

## Adicionando CSS a Nível de Componentes

É possível adicionar CSS especificamente para um componente. Para isso, utilizamos o CSS Modules. Basta criar um arquivo com a extensão `.module.css` e importá-lo no componente.

Por exemplo, para o componente `Frase`, criamos um arquivo `Frase.module.css`:

```css
.fraseContainer {
    background-color: #333;
    border: 1px solid #111;
}

.fraseContent{
    color: #fff;
    background-color: #333;
    margin:  0;
}
```

E importamos no componente `Frase`:

```javascript
import styles from './Frase.module.css'

function Frase(){
    return(
        <div className={styles.fraseContainer}>
        <p className={styles.fraseContent}>Eu sou uma frase</p>
        </div>
    )
}
export default Frase;
```

No `App.js`, importamos tanto o CSS global (`App.css`) quanto o CSS do componente `Frase`:

```javascript
import './App.css';
import Frase from './components/Frase';

function App() {
  return (
    <div className="App">
    <Frase />
    <SayMyName nome="John"/>
    </div>
  );
}

export default App;
```

## Resumo

- O CSS pode ser adicionado globalmente ou a nível de componentes.
- Para adicionar CSS globalmente, utilizamos um arquivo `.css` comum.
- Para adicionar CSS a nível de componentes, utilizamos o CSS Modules (`.module.css`).
- O CSS do componente é importado no componente e aplicado através de classes.


# [Aula 7: Utilizando React fragments ](https://www.youtube.com/watch?v=2cNLJlbudPU&list=PLnDvRpP8BneyVA0SZ2okm-QBojomniQVO&index=7&pp=iAQB)

Nesta aula, aprendemos sobre `React Fragments`, que permitem a criação de componentes sem a necessidade de um elemento pai.

## O que são React Fragments?

`React Fragments` é uma funcionalidade do React que permite agrupar uma lista de filhos sem adicionar nós extras ao DOM.

## Exemplo de Uso

Vamos criar um componente chamado `List` que utiliza `React Fragments`:

```javascript
function List(){
    return (
    <>
        <h1>Minha lista</h1>
        <ul>
        <li> item 1</li>
        <li> item 2</li>
        </ul>
    </>
    )
}
export default List
```

No `App.js`, importamos o componente `List`:

```javascript
import './App.css';
import List from './components/List';

function App() {
  return (
    <div className="App">
    <List/>
    </div>
  );
}

export default App;
```

## Uso com Outros Componentes

Podemos utilizar `React Fragments` com outros componentes. Veja o exemplo do componente `Item`:

```javascript
function Item({marca}){
    return (
        <>
        <li>{marca}</li>
        </>
    )
}
export default Item
```

E o componente `List` atualizado:

```javascript
import Item from './Item'

function List(){
    return (
    <>
        <h1>Minha lista</h1>
        <ul>
            <Item marca="Nike"/>
            <Item marca="Adidas"/>
            <Item marca="Puma"/>
            <Item marca="Fila"/>
        </ul>
    </>
    )
}
export default List
```

## Resumo

- `React Fragments` permitem a criação de componentes sem a necessidade de um elemento pai.
- A sintaxe é `<> e </>`.
- O propósito é simplificar os nós do DOM.
- Podemos criar `React Fragments` diretamente no JSX.


# [Aula 8: Avançando em props](https://www.youtube.com/watch?v=hcp1LqP2OCE&list=PLnDvRpP8BneyVA0SZ2okm-QBojomniQVO&index=8&pp=iAQB)


Nesta aula, avançamos no conceito de `props` no React, aprendendo como definir tipos para os `props` e como definir valores padrão.

## Definindo Tipos para os Props

Podemos definir tipos para os `props`, realizando uma espécie de validação. Vamos pegar o exemplo anterior de `Item` e `List`, supondo que agora `Item` também recebe o ano de lançamento:

```javascript
function Item({marca, ano_lancamento}){
    return (
        <>
        <li>{marca} - {ano_lancamento}</li>
        </>
    )
}
export default Item
```

A `List` agora fica:

```javascript
import Item from './Item'

function List(){
    return (
    <>
        <h1>Minha lista</h1>
        <ul>
            <Item marca="Nike" ano_lancamento={1985}/>
            <Item marca="Adidas" ano_lancamento={1964}/>
        </ul>
    </>
    )
}
export default List
```

Para garantir que os `props` fiquem com os tipos corretos, usamos o `propTypes`:

```javascript
import PropTypes from 'prop-types'

function Item({marca, ano_lancamento}){
    return (
        <>
        <li>{marca} - {ano_lancamento}</li>
        </>
    )
}

Item.propTypes = {
    //isRequired seria para dizer que marca é requerida no componente assim apresentando um aviso no log do navegador caso o o item seja passado vazio <Item />
    marca: PropTypes.string.isRequired,
    ano_lancamento: PropTypes.number
}

export default Item
```

O `propTypes` não irá causar nenhum erro em si, mas sim um aviso caso o programador não siga a tipagem descrita.

## Definindo um Valor Padrão

Também há a possibilidade de definir um valor padrão para os `props`. Neste caso, utilizamos o objeto `defaultProps`:

```javascript
import PropTypes from 'prop-types'

function Item({marca, ano_lancamento}){
    return (
        <>
        <li>{marca} - {ano_lancamento}</li>
        </>
    )
}

Item.propTypes = {
    marca: PropTypes.string,
    ano_lancamento: PropTypes.number
}

Item.defaultProps = {
    marca: 'Faltou a marca',
    ano_lancamento: 0
}

export default Item
```

A `List` ficaria assim:

```javascript
import Item from './Item'

function List(){
    return (
    <>
        <h1>Minha lista</h1>
        <ul>
            <Item/>
            <Item/>
        </ul>
    </>
    )
}
export default List
```

Neste caso, o `Item` vai receber o que foi definido no `Item.defaultProps`.

## Resumo

- Podemos definir tipos para os `props` com `propTypes`.
- Podemos definir valores padrão para os `props` com `defaultProps`.
- O `propTypes` gera um aviso caso o tipo do `prop` não seja o esperado.
- O `defaultProps` define um valor padrão caso o `prop` não seja fornecido.


# [Aula 9: Eventos no React (onClick, onChange e onSubmit)](https://www.youtube.com/watch?v=uqmRi4JXk3s&list=PLnDvRpP8BneyVA0SZ2okm-QBojomniQVO&index=9)


Nesta aula, aprendemos sobre os eventos no React, que são os mesmos eventos do DOM. Os eventos são atrelados a uma tag que irá executá-los, e geralmente um método é atribuído ao evento. Este método deve ser criado no componente.

## Exemplo de Uso de onClick

Vamos criar um componente chamado `Evento` que possui um botão. Quando o botão é clicado, o evento `onClick` é disparado e executa a função `meuEvento`, que imprime uma mensagem no console.

```javascript
function Evento(){
    function meuEvento(){
        console.log("Evento disparado");
    }
    return(
        <div>
            <p>Clique para disparar o evento:</p>
            <button onClick={meuEvento}>Ativar!</button>
        </div>
    )
}
export default Evento
```

Podemos chamar o componente `Evento` no `App.js`:

```javascript
import './App.css';
import Evento from './components/Evento';

function App() {
  return (
    <div className="App">
      <Evento />
    </div>
  );
}

export default App;
```

Também podemos passar `props` para o componente `Evento` e utilizá-los na função `meuEvento`:

```javascript
function Evento({numero}){
    function meuEvento(){
        console.log(`Evento disparado! ${numero}`);
    }
    return(
        <div>
            <p>Clique para disparar o evento:</p>
            <button onClick={meuEvento}>Ativar!</button>
        </div>
    )
}
export default Evento
```

## Exemplo de Uso de onSubmit

Agora, vamos criar um componente chamado `Form` que possui um formulário. Quando o formulário é submetido, o evento `onSubmit` é disparado e executa a função `cadastrarUsuario`, que imprime uma mensagem no console.

```javascript
function Form(){
    function cadastrarUsuario(e){
    e.preventDefault(e)
    console.log('cadastrou')

    }
    return(
        <div>
        <h1>meu cadastro</h1>
        <form onSubmit={cadastrarUsuario}>

            
            <input type="text" placeholder="digite um nome:"/>
            <input type="submit" name="submit"/>
        </form>
        </div>
    )
}

export default Form

export default Form
```

Podemos chamar os componentes `Evento` e `Form` no `App.js`:

```javascript
import './App.css';
import Evento from './components/Evento';
import Form from './components/Form';

function App() {
  return (
    <div className="App">
      <Evento numero={1} />
      <Evento numero={2} />
      <Form />
    </div>
  );
}

export default App;
```

## Resumo

- Os eventos no React são os mesmos eventos do DOM.
- Os eventos são atrelados a uma tag que irá executá-los.
- Geralmente um método é atribuído ao evento.
- Este método deve ser criado no componente.


# [Aula 10: useState )](https://www.youtube.com/watch?v=uqmRi4JXk3s&list=PLnDvRpP8BneyVA0SZ2okm-QBojomniQVO&index=9)

O `useState` é um Hook do React que permite adicionar o estado do React a componentes de função. Ele é usado para manusear o estado de um componente de forma simples e eficaz. Este Hook é especialmente útil quando trabalhamos com eventos e queremos atrelar um evento a uma mudança de estado.

## Exemplo de Uso

No exemplo abaixo, temos um componente de formulário simples. O estado inicial do campo "nome" é definido vazia.

```javascript
import {useState} from 'react'

function Form(){
    function cadastrarUsuario(event){
        event.preventDefault(event)
        console.log(`cadastrou ${nome}`)
    }
    
    const [nome, setNome] = useState()

    return(
        <div>
            <h1>meu cadastro</h1>
            <form onSubmit={cadastrarUsuario}>
                <label htmlFor="nome">nome:</label>
                <input type="text" id="nome" placeholder="digite um nome:" onChange={(e) => setNome(e.target.value)}/>
                <div>
                    <input type="submit" name="submit" />
                </div>
            </form>
        </div>
    )
}

export default Form
```
Podemos chamar o componente `Form` atualizado no `App.js`:

```javascript
import './App.css';
import Form from './components/Form';

function App() {
  return (
    <div className="App">
      <Form />
    </div>
  );
}

export default App;
```

Neste código, `useState()` retorna um par de valores: o estado atual (`nome`) e uma função que atualiza esse estado (`setNome`). Quando o usuário digita no campo de entrada, o evento `onChange` é acionado e a função `setNome` é chamada com o valor atual do campo de entrada. Isso atualiza o estado `nome` com o valor que o usuário digitou.

## Definindo um Valor Inicial

O Hook `useState` também pode ser usado para definir um valor inicial para o estado. No exemplo abaixo, o estado inicial do campo "nome" é definido como 'jvras'.

```javascript
import {useState} from 'react'

function Form(){
    function cadastrarUsuario(event){
        event.preventDefault(event)
        console.log(`cadastrou ${nome}`)
    }
    
    const [nome, setNome] = useState('jvras')

    return(
        <div>
            <h1>meu cadastro</h1>
            <form onSubmit={cadastrarUsuario}>
                <label htmlFor="nome">nome:</label>
                <input type="text" id="nome" placeholder="digite um nome:" value={nome} onChange={(e) => setNome(e.target.value)}/>
                <div>
                    <input type="submit" name="submit" />
                </div>
            </form>
        </div>
    )
}

export default Form
```

Neste caso, o campo de entrada exibirá 'jvras' como valor inicial. Isso pode ser útil para preencher previamente um formulário com dados existentes, como quando um usuário deseja editar suas informações.

# [Aula 11: Passar eventos por props)](https://www.youtube.com/watch?v=obUEByaiwtY&list=PLnDvRpP8BneyVA0SZ2okm-QBojomniQVO&index=11&pp=iAQB)



No React, é possível passar métodos como props de um componente pai para um componente filho. Isso permite que o componente filho ative um método definido no componente pai. Essa abordagem é útil quando se deseja que um evento no componente filho cause uma mudança no componente pai.

## Exemplo de Uso

No exemplo a seguir, temos dois componentes: `Evento` e `Button`. O componente `Evento` é o componente pai e `Button` é o componente filho.

### Button.js

```javascript
function Button({text, event}){
    return (
    <button onClick={event}> {text} </button>
    )
}
export default Button
```

O componente `Button` recebe duas props: `text` e `event`. A prop `text` é usada para definir o texto do botão e a prop `event` é usada para definir a função que será chamada quando o botão for clicado.

### Evento.js

```javascript
import Button from "./Button";

function Evento(){
    function meuEvento(){
        console.log(`Evento disparado!`);
    }
    return(
        <div>
            <p>clique para disparar o evento:</p>
            <Button event={meuEvento} text="Primeiro Evento" />
        </div>
    )
}
export default Evento
```

O componente `Evento` define uma função `meuEvento` que é passada como prop para o componente `Button`. Quando o botão é clicado, a função `meuEvento` é chamada, disparando o evento.

### App.js

```javascript
import './App.css';
import Evento from './components/Evento';

function App() {
  return (
    <div className="App">
      <Evento />
    </div>
  );
}

export default App;
```

O componente `App` é o componente raiz do aplicativo. Ele renderiza o componente `Evento`.

Em resumo, o componente `Button` é capaz de disparar um evento definido no componente `Evento` graças à prop `event` que é passada do componente pai (`Evento`) para o componente filho (`Button`). Isso é um exemplo de como os métodos podem ser passados como props no React.

## Passando Múltiplos Métodos como Props

É possível passar mais de um método como prop para um componente filho. Isso é útil quando se deseja que o componente filho possa disparar diferentes eventos no componente pai.

Por exemplo, podemos ter um botão para favoritar um produto e outro botão para adicionar o produto ao carrinho. Ambos os botões podem ser componentes filhos que disparam eventos no componente pai.

Veja o exemplo abaixo:

```javascript
import Button from "./Button";

function Evento(){
    function primeiroEvento(){
        console.log(`Evento 1 disparado!`);
    }
    function segundoEvento(){
        console.log(`Evento 2 disparado!`);
    }
    return(
        <div>
            <p>clique para disparar o evento:</p>
            <Button event={primeiroEvento} text="Primeiro Evento" />
            <Button event={segundoEvento} text="Segundo Evento" />
        </div>
    )
}
export default Evento
```

Neste exemplo, o componente `Evento` define dois métodos: `primeiroEvento` e `segundoEvento`. Cada um desses métodos é passado como prop para um componente `Button` diferente. Assim, cada botão pode disparar um evento diferente quando clicado.

## Resumo

- Métodos podem ser passados como props no React.
- Um componente filho pode ativar um método definido no componente pai.
- O método é acessado através de um evento.
- A sintaxe para passar um método como prop é a mesma que para passar dados: `props.meuEvento`.


# [Aula 12: Renderização condicional)](https://www.youtube.com/watch?v=7ewepbLCvHc&list=PLnDvRpP8BneyVA0SZ2okm-QBojomniQVO&index=12&pp=iAQB)


A renderização condicional é um conceito em React que permite exibir diferentes elementos de UI com base em determinadas condições. Isso é feito usando estruturas condicionais JavaScript, como `if` ou operadores lógicos, dentro das chaves `{}` em JSX.

## Exemplo de Uso

Neste exemplo, criamos um componente chamado `Condicional.js`. Este componente permite ao usuário inserir um email e, em seguida, exibe esse email na tela. O email do usuário só é exibido se ele tiver sido inserido, o que é uma forma de renderização condicional.

### Condicional.js

```javascript
import { useState } from "react";

function Condicinal(){
    const [email, setEmail] = useState() // Guarda o valor do campo de email
    const [userEmail, setUserEmail] = useState() // Guarda o email do usuário após o envio

    // Função para lidar com o envio do email
    function enviarEmail(e){
        e.preventDefault()
        console.log('enviou o email')
        setUserEmail(email) // Atualiza o email do usuário
        console.log(userEmail)
    }

    // Função para limpar o email do usuário
    function limparEmail(e){
        setUserEmail('') // Limpa o email do usuário
        e.preventDefault()
        console.log('div limpa')
    }

    return(
        <div>
            <h2>cadastre seu email:</h2>

            <form>
                <input type="email" placeholder="digite seu email:" onChange={(e) => setEmail(e.target.value)}/>
            </form>
            <button type="submit" onClick={enviarEmail}>enviar</button>
            {userEmail && 
            <div>
                <p>o email do usuário é: {userEmail}</p>
                <button onClick={limparEmail}>limpar</button>
            </div>}
        </div>
    )
}
export default Condicinal
```

Neste componente, temos duas variáveis de estado: `email` e `userEmail`. A variável `email` guarda o valor do campo de email, enquanto `userEmail` guarda o email do usuário após o envio.

A função `enviarEmail` é chamada quando o botão "enviar" é clicado. Esta função atualiza `userEmail` com o valor de `email`.

A função `limparEmail` é chamada quando o botão "limpar" é clicado. Esta função limpa `userEmail`, definindo seu valor como uma string vazia.

A renderização condicional ocorre na linha `{userEmail && <div>...`. Se `userEmail` tiver algum valor (ou seja, se for verdadeiro), a `div` é renderizada. Se `userEmail` for uma string vazia (ou seja, se for falso), a `div` não é renderizada.

### App.js

```javascript
import './App.css';
import Condicinal from './components/condicional';

function App() {
  return (
    <div className="App">
    <h1>Renderização condicinal</h1>
    <Condicinal />
    </div>
  );
}

export default App;
```

O componente `App` é o componente raiz do aplicativo. Ele renderiza o componente `Condicinal`.

## Resumo

- A renderização condicional permite exibir diferentes elementos de UI com base em determinadas condições.
- As condições são escritas usando estruturas condicionais JavaScript dentro das chaves `{}` em JSX.
- No exemplo acima, a renderização condicional é usada para exibir o email do usuário apenas se ele tiver sido inserido.


# [Aula 13: Renderização de listas)](https://www.youtube.com/watch?v=yEhuRXccoGE&list=PLnDvRpP8BneyVA0SZ2okm-QBojomniQVO&index=13&pp=iAQB)


A renderização de listas é um conceito em React que permite exibir uma lista de elementos de UI com base em um array de dados. Isso é feito usando o método `map` do JavaScript para percorrer cada item do array e retornar um elemento de UI para cada item.

## Exemplo de Uso

Neste exemplo, criamos um componente chamado `OutraLista.js`. Este componente recebe um array de strings como prop e exibe cada string em um elemento `<p>`.

### OutraLista.js

```javascript
function OutraLista({ lista }) {
    return (
        <>
            <h3>lista de itens</h3>
            {lista.length > 0 ? (
                lista.map((item, index) => (
                    <p key={index}>{item}</p>
                ))
            ) : (
                <p>Não há itens na lista</p>
            )}
        </>
    );
}
export default OutraLista;
```

Neste componente, usamos o método `map` para percorrer cada item do array `lista`. Para cada item, retornamos um elemento `<p>` contendo o item. O atributo `key` é necessário ao renderizar listas em React para ajudar o React a identificar quais itens foram alterados, adicionados ou removidos. Neste caso, estamos usando o índice do item como chave, mas em um cenário real, você provavelmente usaria um ID único do item.

Usamos o operador ternário (`? :`) para verificar se o array `lista` contém algum item. Se `lista.length > 0` for verdadeiro, renderizamos a lista de itens. Se for falso, renderizamos a mensagem "Não há itens na lista". Isso é um exemplo de renderização condicional.

### App.js

```javascript
import './App.css';
import OutraLista from './components/outraLista';

function App() {
  const lista = ['Nike', 'Adidas', 'Puma']

  return (
    <div className="App">
    <h1>Renderização listas</h1>
    <OutraLista lista={lista}/>
    <OutraLista lista={[]}/>
    </div>
  );
}

export default App;
```

O componente `App` é o componente raiz do aplicativo. Ele define um array `lista` e passa esse array como prop para o componente `OutraLista`.

## Explicação dos Termos

- `? = if`: O operador ternário `?` é usado para criar uma condição if em uma única linha. A expressão antes do `?` é a condição, a expressão entre o `?` e o `:` é o que acontece se a condição for verdadeira, e a expressão após o `:` é o que acontece se a condição for falsa.

- `: = else`: O operador `:` é usado em conjunto com o `?` para criar uma condição else em uma única linha.

- `length`: O atributo `length` é usado para obter o número de itens em um array. No exemplo acima, `lista.length` retorna o número de itens na lista.

- `lista.map`: O método `map` é usado para criar um novo array com os resultados da chamada de uma função fornecida em cada elemento do array chamado. No exemplo acima, `lista.map` é usado para criar um novo array de elementos `<p>`, um para cada item na lista.

## Resumo

- A renderização de listas permite exibir uma lista de elementos de UI com base em um array de dados.
- O método `map` é usado para percorrer cada item do array e retornar um elemento de UI para cada item.
- O operador ternário (`? :`) é usado para renderizar diferentes elementos de UI com base em uma condição.
- O atributo `key` é necessário ao renderizar listas em React.



# [Aula 14: Elevação de Estado (State Lift))](https://www.youtube.com/watch?v=01Gj6i2wlS4&list=PLnDvRpP8BneyVA0SZ2okm-QBojomniQVO&index=14&pp=iAQB)


A Elevação de Estado (State Lift) é uma técnica em React que permite compartilhar o estado entre vários componentes. Isso é útil quando vários componentes dependem do mesmo estado. Nesse caso, o estado é "elevado" para o componente pai comum mais próximo.

## Conceitos Chave

- **Elevação de Estado (State Lift)**: É uma técnica utilizada para compartilhar o estado entre vários componentes. Quando vários componentes dependem do mesmo estado, esse estado é "elevado" para o componente pai comum mais próximo. é uma técnica em React que permite compartilhar o estado entre vários componentes. Isso é útil quando vários componentes dependem do mesmo estado. Nesse caso, o estado é "elevado" para o componente pai comum mais próximo.


- **Componente Pai**: É o componente que contém o estado compartilhado. Ele é responsável por passar o estado e a função para atualizar o estado para os componentes filhos.

- **Componente Filho**: É o componente que recebe o estado e a função para atualizar o estado como props do componente pai. Ele pode usar essas props para ler e atualizar o estado.

## Exemplo Simples

Neste exemplo, criamos um componente chamado `SeuNome.js`. Este componente permite ao usuário inserir seu nome.

### SeuNome.js

```javascript
function SeuNome({setNome}){
    return(
        <div>
            <p>Digite seu nome:</p>
            <input type="text" placeholder="Qual é o seu nome?" onChange={(e) => setNome(e.target.value)}/>
        </div>
    )
}
export default SeuNome;
```

### App.js

```javascript
import './App.css';
import { useState } from 'react'
import SeuNome from './components/SeuNome';

function App() {
  const [nome, setNome] = useState()
  return (
    <div className="App">
    <h1>State Lift</h1>
    <SeuNome setNome={setNome} />
    {nome}
    </div>
  );
}

export default App;
```

## Exemplo Avançado

Neste exemplo, adicionamos um segundo componente chamado `Saudacao.js`. Este componente recebe o estado `nome` e exibe uma saudação personalizada para o usuário.

### Saudacao.js

```javascript
function Saudacao({nome}){
    function GerarSaudacao(algumnome){
        return `Olá, ${algumnome}!`
    }
    return( 
    <>    
    {nome && <p>{GerarSaudacao(nome)}</p>}
    </>
    )
}
export default Saudacao;
```

### App.js

```javascript
import './App.css';
import { useState } from 'react'
import SeuNome from './components/SeuNome';
import Saudacao from './components/saudacao';

function App() {
  const [nome, setNome] = useState()
  return (
    <div className="App">
    <h1>State Lift</h1>
    <SeuNome setNome={setNome} />
    <Saudacao nome={nome} />
    </div>
  );
}

export default App;
```

## Resumo

- A Elevação de Estado (State Lift) é uma técnica que permite compartilhar o estado entre vários componentes.
- Quando vários componentes dependem do mesmo estado, esse estado é "elevado" para o componente pai comum mais próximo.
- No exemplo acima, o estado `nome` é compartilhado entre os componentes `SeuNome` e `Saudacao` através do componente pai `App`.
- Isso permite que `SeuNome` atualize `nome` e `Saudacao` leia `nome`, mesmo que eles sejam componentes irmãos.

# [Aula 15: React Router](https://youtu.be/eJ8W3l371Jg?list=PLnDvRpP8BneyVA0SZ2okm-QBojomniQVO)

- O `React Router` é um pacote para mudança de URLs da aplicação.
- Podemos assim acessar outras views, sem a `page reload`.
- Trocando apenas uma parte do `layout da aplicação`, ou seja, o que muda de view para view.
- Precisamos instalar este pacote no projeto.
- E também realizar algumas mudanças em como o App é estruturado.
 