import './Rodape.css'

const Rodape = () => {
    return(
        <footer className="rodape">
            <section>
                <ul>
                    <li>
                        <a href='facebook.com' target="_blank">
                        <img className="face" src="/imagens/fb.png" alt="Logo do Facebook no rodapé da página do Organo"/>
                        </a>
                    </li>
                    <li>
                        <a href='instagram.com' target="_blank">
                        <img className="insta" src="/imagens/ig.png" alt="Logo do Instagram no rodapé da página do Organo"/>
                        </a>
                    </li>
                    <li>
                        <a href='twitter.com' target="_blank">
                        <img className="twitter" src="/imagens/tw.png" alt="Logo do Twitter no rodapé da página do Organo"/>
                        </a>
                    </li>
                </ul>
            </section>
            <section>
                <img className="organo" src="/imagens/logo.png" alt="Logo do Organo no rodapé da página"/>
            </section>
            <section>
                <p>Desenvolvido por Alura.</p>
            </section>
        </footer>
    )
}

export default Rodape