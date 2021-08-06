import { Component } from "react";
import { PokeAPI, PokemonResult } from "./pokemon";
import logo from '../logo.svg';

interface Props{

}

interface State{
   pokemons: PokemonResult[];
   loading: boolean;
   erro?: string;

}

export class ListaPokemons extends Component< Props, State>{
	constructor(props: Props){
		super(props);
		this.state = {
         pokemons: [],
         loading: false,
         erro: ' '
      };
	}

   componentDidMount(){
      //Requisições geralmente são feitas no componentdidMount
      // Para fazer a requisição, primeiro instanciar a API
      const api = new PokeAPI();     

      this.setState({loading: true}); //aqui o loading é true pois o componente nãop foi montado ainda, e a requisição não foi feita

      api.getPokemonList().then(
         (resultado) => {
            this.setState({
               pokemons: resultado.results,
               loading : false, //Quando chegar a resposta da requisição, queremos que pare de carregar
            });
         }).catch((err) => {
            console.log(err);
            this.setState({loading: false, erro: 'Ocorreu um erro '}) //porque se der erro, queremos que pare de carregar
         });
   }

	render(){
         if(this.state.loading){
            return( 
            <div>
               <span>Carregando...</span>
               <img src={logo} className="App-logo" alt="logo" />
            </div>
            )
         }

         if(this.state.erro){
            return (<p>{this.state.erro}</p>)
         }
         return (
			<ul>
				{/* <li>Item 1</li> Como traduzir uma lista de pokemons em elementos html? */}
            {/* Trabalhando com listas em React, usar a propriedade key */}
            {this.state.pokemons.map((pokemon) => (
               <li key={pokemon.name}> {pokemon.name}</li>
            ))}
			</ul>
		);
	}
}
