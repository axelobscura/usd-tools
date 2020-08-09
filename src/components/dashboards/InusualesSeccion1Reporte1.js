import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Titulo from './Titulo/Titulo';
import Form from 'react-bootstrap/Form';
import Dona from './Graficas/Dona';
import Multilineas from './Graficas/Multilineas';
import StackedBar from './Graficas/StackedBar';
import Tabla from './Graficas/Tabla';
import Barras from './Graficas/Barras';

function InusualesSeccion1Reporte1() {
    return (
        <>
            <Titulo texto="Reporte 1 - Visualizador de campos y registros" />
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
                        <h4><span className="lnr lnr-chevron-right"></span> Número de errores en reporte de operaciones inusuales</h4>
                        <hr />
                        <Dona />
                    </Col>
                    <Col>
                        <h4><span className="lnr lnr-chevron-right"></span> Tendencia de número de errores por columna</h4>
                        <hr />
                        <Multilineas />
                    </Col>
                    <Col>
                        <h4><span className="lnr lnr-chevron-right"></span> Número de errores en registros por columna</h4>
                        <hr />
                        <StackedBar />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h4><span className="lnr lnr-chevron-right"></span> Errores por columna en registros de reporte de operadores inusuales</h4>
                        <hr />
                        <Tabla />
                    </Col>
                    <Col>
                        <hr />
                        <h4><span className="lnr lnr-chevron-right"></span> Tipo de error por columna en reporte trimestral</h4>
                        <Form.Group style={{ width: '100%' }}>
                            <Form.Control as="select" size="lg" custom>
                                <option>Seleccionar periodo</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </Form.Control>
                        </Form.Group>
                        <hr />
                        <Barras />
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default InusualesSeccion1Reporte1;