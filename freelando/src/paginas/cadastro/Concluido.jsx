import { Col, Row } from "react-grid-system";
import { Tipografia } from "../../componentes/Tipografia/Tipografia";
import { Link } from "react-router-dom";
import { Botao } from "../../componentes/Botao/Botao";


import conclusao from './assets/cliente-concluido.png'
import styled from "@emotion/styled";

const ImagemEstilizada = styled.img`
    max-width: 100%;
    border-radius: 16px;
`

const Concluido = () => {

    return (
        <>
            <div style={{ textAlign: 'center' }}>

                <Tipografia variante="h1" componente="h1">
                    Seu perfil está completo!
                </Tipografia>
                <Tipografia variante="h3" componente="h3">Agora é só começar a se conectar com os melhores freelancers do mercado!</Tipografia>
            </div>
            <figure>
                <ImagemEstilizada src={conclusao} alt="" />
            </figure>


   <Row justify="center">
                <Col lg={6} md={6} sm={6} style={{textAlign: ' center'}}>
                    <Link to="..">
                        <Botao variante="secundaria">
                            Voltar ao Inicío
                        </Botao>
                    </Link>
                </Col>
            </Row>
 

            



        </>
    )

}


export default Concluido;