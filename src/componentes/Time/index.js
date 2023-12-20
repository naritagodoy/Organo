import Colaborador from '../Colaborador'
import './Time.css'
import hexToRgba from 'hex-to-rgba';

const Time = ({colaboradores, cor, nome, aoDeletar, mudarCor, id}) => {

    const css = {backgroundColor: hexToRgba(cor, '0.6')}
    
    //console.log('time nome', Time.nome)
    return (

        (colaboradores.length > 0) ? <section style={css} className='time'>
            <div className='nome__time'>
            <input onChange={evento => {mudarCor(evento.target.value, id)}} value={Time.cor} type='color' className='input-color' />
            <h3 style={{ borderColor: cor }}>{nome}</h3>
            </div>
            <div className='colaboradores'>
                {colaboradores.map((colaborador, indice) => {
                    console.log({cor})
                    return <Colaborador key={indice} colaborador={colaborador} corDeFundo={cor} nome={colaborador.Nome} cargo={colaborador.Cargo} imagem={colaborador.Imagem} aoDeletar={aoDeletar}/>
                })}
            </div>
        </section>
            : ''
    )

}

export default Time