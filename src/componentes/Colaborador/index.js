import { IoCloseCircleOutline } from "react-icons/io5"
import './colaborador.css'

const Colaborador = ({colaborador, nome, cargo, imagem, corDeFundo, aoDeletar, id}) => {
    return (
        <div className='colaborador'> 
            <IoCloseCircleOutline 
            size={25} 
            className='deletar' 
            onClick={() => aoDeletar(colaborador.id)} 
        />
    
            <div className='cabecalho' style={{backgroundColor: corDeFundo}}> 
                <img className='img' src={imagem} alt={nome}/>
            </div>

            <div className='rodape'>
                <h4>{nome}</h4>
                <h5> {cargo}</h5>
            </div>
        </div>
    )
}

export default Colaborador