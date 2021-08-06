import React, { ReactNode } from 'react';
import logo from './logo.svg';
import './App.css';
import { ButtonOnOff} from './components/ButtonOnOff'
import { ButtonCount } from './components/ButtonCount';
import { Contador } from './components/Contador';
import { Clock } from './components/clock';
import { ListaPokemons } from './components/ListaPokemons';

function Titulo(){
  const nome = 'Ayuri';
  const isLogado = false;
  let mensagem;
  if(isLogado){
    mensagem = <h2>Olá {nome}</h2>
  }
  else {
    mensagem = <h2> Olá convidado</h2>
  }
  return mensagem;
}
//props
// interface ButtonOnOffProps{
//   color: string;
//   text?: string;
//   children: ReactNode;

// }
// function ButtonOnOff(props:ButtonOnOffProps){
//   let text;
//   if(props.text){
//     text = props.text;
//   } else{
//     text = 'clique aqui';
//   }
//   //operador que torna o if em uma linha só:
//   //let texto = props.text ? props.text: 'clique aqui';

// return <ButtonOnOff className="btn btn-primary mb-2" style={{backgroundColor: props.color}}>{props.children}</ButtonOnOff>; //Agora usando children, para definir componentes dentro de componentes{}
// // return <ButtonOnOff className="btn btn-primary mb-2" style={{backgroundColor: props.color}}>{text}</ButtonOnOff>; //observe que agora se usou js dentro de {}
// // return <ButtonOnOff className="btn btn-primary mb-2" style={{backgroundColor: props.color}}>Clique aqui!</ButtonOnOff>;
// }

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Titulo/>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <ListaPokemons/>
        {/* <Clock/>
        <ButtonOnOff colorON="darkgreen" colorOff="darkred">Meu botão 1</ButtonOnOff> {/*text="my test text">*/}  {/*primeira letra maiúscula pra diferencias dos componentes html*/}
        {/* <ButtonCount>My button count</ButtonCount>
        <Contador/> */} 
        {/* <ButtonOnOff color="darkred">
          <div>
            <p>
              Meu botão 2
              <img src={logo} className="App-logo" alt="logo"/>
            </p>
          </div>
        </ButtonOnOff>
        <ButtonOnOff color="darkgray">Meu botão 3</ButtonOnOff>
        <ButtonOnOff color="darkgreen">Meu botão 4</ButtonOnOff> {/*text="my test text">*/}  {/*primeira letra maiúscula pra diferencias dos componentes html */}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
