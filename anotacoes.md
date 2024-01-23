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
