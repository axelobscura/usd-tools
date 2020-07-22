import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Titulo from './Titulo/Titulo';
import Saunky from './Graficas/Saunky';
import Saunky2 from './Graficas/Saunky2';
import Stacked from './Graficas/Stacked';
import Stacked2 from './Graficas/Stacked2';

function Seccion2Reporte2() {
    return (
        <>
            <Titulo texto="Reporte 7: Flujos de Transferencias Internacionales de Fondos enviados a México" />
            <Container>
                <Row>
                    <Col>
                        <h4><span className="lnr lnr-chevron-right"></span> Flujos mensuales enviados hacia México</h4>
                        <hr />
                        <Saunky />
                    </Col>
                    <Col>
                        <h4><span className="lnr lnr-chevron-right"></span> Monedas/Montos mensuales recibidas por país</h4>
                        <hr />
                        <Stacked />
                    </Col>
                </Row>
                <Row className="mt-5">
                    <Col>
                        <h4><span className="lnr lnr-chevron-right"></span> Flujos mensuales enviados a México desde países en vías de desarrollo considerados como de riesgo alto en materia de PLD/FT por la European Comission</h4>
                        <hr />
                        <Saunky2 />
                    </Col>
                    <Col>
                        <h4><span className="lnr lnr-chevron-right"></span> Monedas/Montos mensuales recibidos desde países en vías de desarrollo considerados como de riesgo alto en materia de PLD/FT por la European Comission</h4>
                        <hr />
                        <Stacked2 />
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Seccion2Reporte2;