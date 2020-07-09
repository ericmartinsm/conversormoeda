import React,{Component} from 'react'
import styled from  'styled-components'
import api from '../services/api'

export const Card = styled.div`
  background: #fff;
  border-radius: 2px;
  display: flex;
  justify-content:center;
  align-items:center;
  height: 300px;
  margin: 1rem;
  position: relative;
  width: 300px; 
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);
  &:hover{
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
  }
`; 

export const Conteudo2 = styled.div`
    text-align:center;
`;


export default class Main extends Component{

    state = {
        produtos:[],
        ValorInput:0,
        ValorConvertido:'',
        MoedaA:'',
        
    }
    componentDidMount(){
        this.carregarProdutos(); 
        
    }
    carregarProdutos = async() =>{ 
        let de_para=this.props.moedaA+'-'+this.props.moedaB
        const produtosApi = await api.get(de_para) 
        this.setState({produtos:produtosApi.data.USD.low}) 
        this.converter();
        this.setState({MoedaA:this.props.moedaA})
    }  
    converter = () => {
        let ValorA = this.state.produtos
        let ValorB = this.state.ValorInput
        this.setState({ValorConvertido:(ValorA*ValorB).toFixed(2)})
    }
    render(){
        
        return(
            <Card>
                <Conteudo2>
                    <h2>{this.props.moedaA} para {this.props.moedaB}</h2>
                    <input onChange={(event)=>{this.setState({ValorInput:event.target.value})}}></input>
                    <input type="button" value="Converter" onClick={this.converter}></input>
                    <h2>Seu valor Convertido: R${this.state.ValorConvertido}</h2>
                </Conteudo2>
            </Card>
            )
        }
    }

