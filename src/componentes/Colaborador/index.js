import {IoCloseCircleOutline} from "react-icons/io5" 
import './colaborador.css'
import {AiFillHeart, AiOutlineHeart} from "react-icons/ai"

const Colaborador = ({colaborador, nome, cargo, imagem, corDeFundo, aoDeletar, aoFavoritar}) => {

    function favoritar() {
        aoFavoritar(colaborador.id);
    }

    const propsfavorito = {
        size: 25,
        onClick: favoritar
    }
    

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
                <div>{colaborador.favorito 
                ? <AiFillHeart {...propsfavorito} color='#ff0000'/> 
                : <AiOutlineHeart {...propsfavorito} />} 
                </div>
            </div>

            <div className="favoritar">
                

            </div>
        </div>
    )
}

export default Colaborador