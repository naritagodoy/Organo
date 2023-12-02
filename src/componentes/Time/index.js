import Colaborador from '../Colaborador'
import './Time.css'

const Time = (props) => {

    const css = {backgroundColor: props.corSecundaria}
    

    return (

        (props.colaboradores.length > 0) ? <section style={css} className='time'>
            <div className='nome__time'>
            <h3 style={{ borderColor: props.corPrimaria }}>{props.nome}</h3>
            </div>
            <div className='colaboradores'>
                {props.colaboradores.map(colaborador => <Colaborador key={colaborador.nome} corDeFundo={props.corPrimaria} nome={colaborador.Nome} cargo={colaborador.Cargo} imagem={colaborador.Imagem} />)}
            </div>
        </section>
            : ''
    )

}

export default Time