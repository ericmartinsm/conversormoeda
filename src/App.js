import React,{Component} from 'react';
import './App.css';




import Header from './components/header'
import Card from './components/USD_BRL'




const App = () => (
  <div>
    <Header/>
    <div className="container">
    <Card moedaA="USD" moedaB="BRL" />
    </div>
  </div>
)

export default App;