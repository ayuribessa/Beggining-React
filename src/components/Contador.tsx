import { Component } from "react";

interface Props{  
}

interface State{
	contador:number;
}


export class Contador extends Component<Props,State> {
	constructor(props:Props){
		super(props);
                this.state = {
			contador: 0
		}

	}
  onClickButtonAdd = () =>{
    const valorAtual = this.state.contador;
    this.setState({
      contador: valorAtual + 1
    });
  }
  onClickButtonSub = () =>{
    const valorAtual = this.state.contador;
    this.setState({
      contador: valorAtual - 1
    });
  }
	render(){
		return(
			<div>
				<button className="btn btn-primary" onClick={this.onClickButtonSub}> Subtrair </button>
        <p>{this.state.contador}</p>
        <button className="btn btn-primary" onClick={this.onClickButtonAdd}>Adicionar</button>
			</div>
		)
	}
}