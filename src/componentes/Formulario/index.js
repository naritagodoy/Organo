import { useState } from 'react'
import Botao from '../Botao/Index'
import CampoTexto from '../CampoTexto'
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


    const [Nome, setNome] = useState('')
    const [Cargo, setCargo] = useState('')
    const [Imagem, setImagem] = useState('')
    const [Time, setTime] = useState('')



    return (
        <section className="formulario">

            <form onSubmit={aoSalvar}>
                <h2> Preencha os dados abaixo para criar o card do colaborador</h2>
                <CampoTexto
                    obrigatorio={true}
                    label="Nome" placeholder="Digite o seu nome..."
                    valor={Nome}
                    aoAlterado={valor => setNome(valor)}
                />

                <CampoTexto
                    obrigatorio={true}
                    label="Cargo" placeholder="Digite o seu cargo..."
                    valor={Cargo}
                    aoAlterado={valor => setCargo(valor)}
                />

                <CampoTexto
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
        </section>
    )

}

export default Formulario