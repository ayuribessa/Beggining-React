import React from "react";
import { Component, ReactNode } from "react"; //precisa do importa para utilizar o children??

//Componente Button que estava no App.tsx inicialmente
interface ButtonProps {
  // color: string;
  // text?: string;
  colorON: string;
  colorOff: string;
  children: ReactNode;
}

interface ButtonState {
  on: boolean;
}


export class ButtonOnOff extends Component<ButtonProps, ButtonState> { //Necessário tipar com Props e State por ser TS
  constructor(props: ButtonProps) {
    super(props);
    this.state = {
      on: false,
    }
  }

  onClickButton = () => {
    console.log('Clicou no botão')
    const stateOnOff = this.state.on;
    this.setState({
      on: !stateOnOff,
    });
  };

  render() {
    return <button
      onClick={this.onClickButton}
      className="btn btn-primary mb-2" style={{ backgroundColor: this.state.on ? this.props.colorON : this.props.colorOff }}>
      {this.props.children} - {this.state.on ? "ON": "OFF"} - 
    </button>; //Agora usando children, para definir componentes dentro de componentes{}
  }
}

// export function ButtonOnOff(props:ButtonProps){ //Necessário exportar a função para utilizar no outro arquivo
//   let texto = props.text ? props.text: 'clique aqui';

// return <button className="btn btn-primary mb-2" style={{backgroundColor: props.color}}>{props.children}</button>; //Agora usando children, para definir componentes dentro de componentes{}
// }

