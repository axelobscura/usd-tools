import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Titulo from './Titulo/Titulo';
import Saunky from './Graficas/Saunky';
import Saunky2 from './Graficas/Saunky2';
import Stacked from './Graficas/Stacked';
import Stacked2 from './Graficas/Stacked2';

function Seccion2Reporte1() {
    return (
        <>
            <Titulo texto="Reporte 6: Flujos de Transferencias Internacionales de Fondos enviados fuera de México" />
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
                        <h4><span className="lnr lnr-chevron-right"></span> Flujos mensuales fuera de México hacia países de baja imposición fiscal</h4>
                        <hr />
                        <Saunky2 />
                    </Col>
                    <Col>
                        <h4><span className="lnr lnr-chevron-right"></span> Monedas/Montos mensuales enviados a cada país de Baja imposición fiscal</h4>
                        <hr />
                        <Stacked2 />
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Seccion2Reporte1;