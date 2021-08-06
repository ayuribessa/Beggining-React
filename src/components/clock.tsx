import { Component } from "react";

interface Props {
}

interface State {
  agora: Date;
}

export class Clock extends Component<Props, State>{
  timerId?: any; //foi colocado em any para que os erros sumissem, mas o correto seria outro tipo
  constructor(props:Props){
    super(props);
    this.state = {
      agora: new Date(), //Aqui é onde é definido o estado
    }
  }
  componentDidMount(){
    // console.log('did mount'); 
    this.timerId = setInterval(() => {
      this.setState({
      agora: new Date(),
      });
    },1000);

  }

  componentWillUnmount(){
    // console.log('Unmount');
    clearInterval(this.timerId);
  }
	render(){
		return <div>{this.state.agora.toISOString()}</div>;
	}

}