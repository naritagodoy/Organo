import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Time from './componentes/Time';
import Rodape from './componentes/Rodape';
import { v4 as uuidv4 } from 'uuid';



function App() {

  const [times, setTimes] = useState ([

    { id:uuidv4(),
      nome:'Parto domiciliar',
      cor:'#57C278',
  },
    { id:uuidv4(),
      nome:'Parto hospitalar',
      cor:'#82CFFA',
   },
    { id:uuidv4(),
      nome:'Amamentação',
      cor:'#A6D157',
   },
    { id:uuidv4(),
      nome:'Laserterapia',
      cor:'#E06B69',
   },
    { id:uuidv4(),
      nome:'Humanização da assistência',
      cor:'#DB6EBF',
   }
  ])
  
  function deletarColaborador(id) {
    setColaboradores(colaboradores.filter(colaborador => colaborador.id !== id));
  }
 

  function mudarCorDoTime (cor, id) {
    setTimes(times.map(time => {
      if(time.id === id)
      time.cor = cor;

      return time
    }))
  }
  
  function cadastrarTime(novoTime) {
    setTimes([...times, {...novoTime, id:uuidv4()}])
  }  
  
  const [colaboradores, setColaboradores] = useState ([])
  const aoNovoColaboradorAdicionado = (colaborador) => {
        
        setColaboradores([...colaboradores, colaborador])
        
        setColaboradores((colaboradores) => {
          
          return colaboradores.map((colaborador, index) => ({
            ...colaborador,
            id: index + 1
          }));
        })}; 

 

    return (
    <div className="banner">
      <header>
      <Banner />
      </header>
      <div>
      <Formulario 
      
      cadastrarTime={cadastrarTime}
      
      Times={times.map(time => time.nome)} 
      aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)}/>
      
      
     {times.map(time => <Time 
     mudarCor={mudarCorDoTime}
     key={time.nome} 
     nome={time.nome} 
     cor={time.cor} 
     id={time.id}
     corSecundaria={time.corSecundaria}
     colaboradores={colaboradores.filter(colaborador => colaborador.Time === time.nome)}
     aoDeletar={deletarColaborador}

     />
     )}  
    
    </div>
    <footer>
      <Rodape/>
    </footer>
           
    </div>   
      

  );
}

export default App;
