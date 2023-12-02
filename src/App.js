import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Time from './componentes/Time';
import Rodape from './componentes/Rodape';



function App() {

  const Times = [

    {
      nome:'Parto domiciliar',
      corPrimaria:'#57C278',
      corSecundaria:'D9F7E9'
    },
    {
      nome:'Parto hospitalar',
      corPrimaria:'#82CFFA',
      corSecundaria:'#E8F8FF'
    },
    {
      nome:'Amamentação',
      corPrimaria:'#A6D157',
      corSecundaria:'#ADFF2F'
    },
    {
      nome:'Laserterapia',
      corPrimaria:'#E06B69',
      corSecundaria:'#FDE7E8'
    },
    {
      nome:'Humanização da assistência',
      corPrimaria:'#DB6EBF',
      corSecundaria:'#FAE9F5'
    }
  ]
  


  const [colaboradores, setColaboradores] = useState ([''])
  const aoNovoColaboradorAdicionado = (colaborador) => {
        setColaboradores([...colaboradores, colaborador])
  }

  return (
    <div className="banner">
      <header>
      <Banner />
      </header>
      <div>
      <Formulario 
      Times={Times.map(time => time.nome)} 
      aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)}/>
      
      
     {Times.map(time => <Time 
     key={time.nome} 
     nome={time.nome} 
     corPrimaria={time.corPrimaria} 
     corSecundaria={time.corSecundaria}
     colaboradores={colaboradores.filter(colaborador => colaborador.Time === time.nome)}
     
     />)}  
    
    </div>
    <footer>
      <Rodape/>
    </footer>
           
    </div>   
      

  );
}

export default App;
