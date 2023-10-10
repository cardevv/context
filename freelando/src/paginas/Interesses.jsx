import { Col, Row } from "react-grid-system";
import GrupoRadio from "../componentes/Radio/GrupoRadio";
import { Tipografia } from "../componentes/Tipografia/Tipografia"
import { Botao } from "../componentes/Botao/Botao";
import { useState } from "react";



const opcoes = [
    {
        valor: 1,
        label: 'TI e Programação',
    },
    {
        valor: 2,
        label: 'Design e Multimídia',
    },
    {
        valor: 3,
        label: 'Revisão',
    },
    {
        valor: 4,
        label: 'Tradução',
    },
    {
        valor: 5,
        label: 'Transcrição',
    },
    {
        valor: 6,
        label: 'Marketing',
    },
]

const Interesses = () => {


    const [opcao,setOpcao] = useState('')

    return (

        

        <div  style={{ textAlign: 'center' }}>
            <Tipografia variante="h1" componente="h1">

                Crie seu cadastro
            </Tipografia>
            <GrupoRadio opcoes={opcoes} valor={opcao} onChange={setOpcao}/>

            <Row>
              <Col lg={6} md={6} sm={6}>
                <Botao variante="secundaria">
                  Anterior
                </Botao>
              </Col>
              <Col lg={6} md={6} sm={6}>
                <div style={{ textAlign: 'right' }}>
                  <Botao>
                    Próxima
                  </Botao>
                </div>
              </Col>
            </Row>

            <Tipografia variante="h3" componente="h2">
                Qual a área de interesse?
            </Tipografia>


            
        </div>

    )
}

export default Interesses;