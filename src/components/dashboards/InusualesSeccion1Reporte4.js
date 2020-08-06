import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Titulo from './Titulo/Titulo';
import Form from 'react-bootstrap/Form';
import Pay from './Graficas/Pay';
import Barras from './Graficas/Barras';
import StackedBar from './Graficas/StackedBar';
import Tabla from './Graficas/Tabla';

function InusualesSeccion1Reporte4() {
    return (
        <>
            <Titulo texto="Reporte 4- Validación de Registros con consecutivo de cuentas/ personas relacionadas" />
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
                        <h4><span className="lnr lnr-chevron-right"></span> Porcentajes de registros con Consecutivos de cuenta y sin consecutivos de cuenta</h4>
                        <hr />
                        <Pay />
                    </Col>
                    <Col>
                        <h4><span className="lnr lnr-chevron-right"></span> Registros con consecutivos de cuentas/personas relacionadas</h4>
                        <hr />
                        <Tabla />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h4><span className="lnr lnr-chevron-right"></span> Errores en columnas de subregistros de operaciones consecutivas / personas relacionadas</h4>
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
                    <Col>
                        <h4><span className="lnr lnr-chevron-right"></span> Errores en columnas en sus registros con consecutivos de cuentas/personas relacionadas</h4>
                        <hr />
                        <Tabla />
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default InusualesSeccion1Reporte4;