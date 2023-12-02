import './Rodape.css'

const Rodape = () => {

    return (

        <footer className="footer">

            <ul>
                <li>
                    <a href="facebook.com" target="_blank">
                        <img src="/imagens/fb.png" alt="logo facebook" />
                    </a>
                </li>
                <li>
                    <a href="twitter.com" target="_blank">
                        <img src="/imagens/tw.png" alt="logo twitter" />
                    </a>
                </li>
                <li>
                    <a href="instagram.com" target="_blank">
                        <img src="/imagens/ig.png" alt="logo instagram" />
                    </a>
                </li>
            </ul>

            <section>
                <img src="/imagens/logo.png" alt="imagem organo" />
            </section>
            <section className='texto-footer'>
                <div>Desenvolvido por Alura.</div>
            </section>

        </footer>
    )
}

export default Rodape
