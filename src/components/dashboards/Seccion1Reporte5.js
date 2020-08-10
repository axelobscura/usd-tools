import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Titulo from './Titulo/Titulo';
import MyResponsiveNetwork from './Graficas/Nivo/Network';
import Calendar from './Graficas/Nivo/Calendar';
import Am from './Graficas/Am';
import Form from 'react-bootstrap/Form';

function Seccion1Reporte5() {
    return (
        <>
            <Titulo texto="Reporte 5: Visualizador de etiquetas y registros" />
            <Container fluid={true}>
                <Row>
                    <Col>
                        <Form.Group style={{ width: '100%' }}>
                            <Form.Control as="select" size="lg" custom>
                                <option>Seleccionar periodo</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </Form.Control>
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h4><span class="lnr lnr-chevron-right"></span> Composición del reporte</h4>
                        <hr />
                    </Col>
                    <Col>
                        <h4><span class="lnr lnr-chevron-right"></span> Visualización de registro individual</h4>
                        <hr />
                        <Am />
                    </Col>
                </Row>
                <Row className="mt-3">
                    <Col>
                        <h4><span class="lnr lnr-chevron-right"></span> Registro con Estructuras o contenidos inválidos en etiquetas por fecha de operación</h4>
                        <hr />
                        <div style={{height: '350px'}}>
                            <Calendar />
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Seccion1Reporte5;