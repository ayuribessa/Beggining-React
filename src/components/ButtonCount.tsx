
import React from "react";
import { Component, ReactNode } from "react"; //precisa do importa para utilizar o children??

//Componente Button que estava no App.tsx inicialmente
interface ButtonProps {
  children: ReactNode;
}

interface ButtonState {
  contador: number;
}


export class ButtonCount extends Component<ButtonProps, ButtonState> { //Necessário tipar com Props e State por ser TS
  constructor(props: ButtonProps) {
    super(props);
    this.state = {
      contador: 0
    }
  }

  onClickButton = () => {
    console.log('Clicou no botão')
    const valorAtual = this.state.contador;
    this.setState({
      contador: valorAtual + 1,
    });
  };

  render() {
    return <button
      onClick={this.onClickButton}
      className="btn btn-primary mb-2" >
      {this.state.contador}
    </button>; //Agora usando children, para definir componentes dentro de componentes{}
  }
}

// export function ButtonOnOff(props:ButtonProps){ //Necessário exportar a função para utilizar no outro arquivo
//   let texto = props.text ? props.text: 'clique aqui';

// return <button className="btn btn-primary mb-2" style={{backgroundColor: props.color}}>{props.children}</button>; //Agora usando children, para definir componentes dentro de componentes{}
// }

