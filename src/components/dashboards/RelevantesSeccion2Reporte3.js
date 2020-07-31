import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Titulo from './Titulo/Titulo';
import Form from 'react-bootstrap/Form';
import Barras from './Graficas/Barras';
import ColorMap from './Graficas/ColorMap';
import Tabla from './Graficas/Tabla';

function RelevantesSeccion2Reporte3() {
    return (
        <>
            <Titulo texto="Reporte 7: Operaciones relevantes de Personas físicas mayores de 80 años, menores de edad y personas morales con menos de 3 años de constitución" />
            <Container fluid={true}>
                <Row>
                    <Col>
                        <Form.Control as="select" size="lg" custom>
                            <option>Seleccionar periodo</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </Form.Control>
                        <hr />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h4><span class="lnr lnr-chevron-right"></span> Monto por moneda de registros de operaciones de personas físicas menores de edad y mayores de ochenta años</h4>
                        <hr />
                        <Barras />
                    </Col>
                    <Col>
                        <h4><span class="lnr lnr-chevron-right"></span> Geolocalización de operaciones relevantes</h4>
                        <hr />
                        <ColorMap />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h4><span class="lnr lnr-chevron-right"></span> Monto por moneda de registros de operaciones de personas morales con menos de 3 años de constitución</h4>
                        <hr />
                        <Barras />
                    </Col>
                    <Col>
                        <h4><span class="lnr lnr-chevron-right"></span> Geolocalización de operaciones relevantes</h4>
                        <hr />
                        <Tabla />
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default RelevantesSeccion2Reporte3;