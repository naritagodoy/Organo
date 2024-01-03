import { useState } from 'react'
import Botao from '../Botao/Index'
import Campo from '../Campo'
import ListaSuspensa from '../ListaSuspensa'
import './Formulario.css'



const Formulario = (props) => {


    const aoSalvar = (evento) => {
        evento.preventDefault()
        props.aoColaboradorCadastrado({
            Nome,
            Cargo,
            Imagem,
            Time
        })

        setNome('')
        setCargo('')
        setImagem('')
        setTime('')
    }

    const aoSubmeter = (evento) => {
        evento.preventDefault()
        props.cadastrarTime({
            nome: NomeTime,
            cor: CorTime
        })

        setNomeTime('')
        setCorTime('')
    }


    const [Nome, setNome] = useState('')
    const [Cargo, setCargo] = useState('')
    const [Imagem, setImagem] = useState('')
    const [Time, setTime] = useState('')
    const [NomeTime, setNomeTime] = useState('')
    const [CorTime, setCorTime] = useState('')
    
    
    return (
        <section className="formulario">

            <form onSubmit={aoSalvar}>
                <h2> Preencha os dados abaixo para criar o card do colaborador</h2>
                <Campo
                    obrigatorio={true}
                    label="Nome" placeholder="Digite o seu nome..."
                    valor={Nome}
                    aoAlterado={valor => setNome(valor)}
                />

                <Campo
                    obrigatorio={true}
                    label="Cargo" placeholder="Digite o seu cargo..."
                    valor={Cargo}
                    aoAlterado={valor => setCargo(valor)}
                />

                <Campo
                    label="Imagem" placeholder="Digite o endereço da imagem..."
                    valor={Imagem}
                    aoAlterado={valor => setImagem(valor)}
                />

                <ListaSuspensa
                    obrigatorio={true} label='Times' itens={props.Times}
                    valor={Time}
                    aoAlterado={valor => setTime(valor)}
                />

                <Botao>
                    Criar card
                </Botao>

            </form>
            
            <form className="formulario" onSubmit={aoSubmeter}>

                <h3> Preencha os dados abaixo para criar um novo time</h3>

                <Campo
                    obrigatorio={true}
                    label="Nome do Time" placeholder="Digite o nome do novo Time..."
                    valor={NomeTime}
                    aoAlterado={valor => setNomeTime(valor)}
                />

                <Campo
                    obrigatorio={true}
                    type='color'
                    label="Cor" 
                    placeholder="Digite a cor do novo Time.."
                    valor={CorTime}
                    aoAlterado={valor => setCorTime(valor)}
                />
                <Botao>
                    Criar novo Time
                </Botao>

            </form>

            
        </section>
    )

}

export default Formulario