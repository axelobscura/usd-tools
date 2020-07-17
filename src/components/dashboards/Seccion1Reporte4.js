import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Titulo from './Titulo/Titulo';
import Form from 'react-bootstrap/Form';
import Barras from './Graficas/Barras';
import Tabla from './Graficas/Tabla';

function Seccion1Reporte4() {
    return (
        <>
            <Titulo texto="Reporte 4: Etiquetas relacionadas y reglas especiales" />
            <Container>
                <Row>
                    <Col>
                        <h4><span class="lnr lnr-chevron-right"></span> Etiquetas relacionadas a operaciones vacias cuando la etiqueta está presente</h4>
                        <hr />
                        <Tabla />
                    </Col>
                    <Col>
                        <h4><span class="lnr lnr-chevron-right"></span> Personas físicas en registros con errores de CURP</h4>
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
                <Row>
                    <Col>
                        <h4><span class="lnr lnr-chevron-right"></span> Registro con Operación modificatoria pero sin información en la etiqueta 3.1.2.1</h4>
                        <hr />
                        <Tabla />
                    </Col>
                    <Col>
                        <h4><span class="lnr lnr-chevron-right"></span> Personas físicas en registros con errores de CURP</h4>
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
                <Row>
                    <Col>
                        <h4><span class="lnr lnr-chevron-right"></span> Número de Errores de contenido en RFC/CURP por reporte</h4>
                        <hr />
                        <Tabla />
                    </Col>
                    <Col>
                        <h4><span class="lnr lnr-chevron-right"></span> Personas físicas en registros con errores de CURP</h4>
                        <hr />
                        <Barras />
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Seccion1Reporte4;