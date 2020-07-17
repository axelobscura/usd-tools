import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Titulo from './Titulo/Titulo';
import Form from 'react-bootstrap/Form';
import Pay from './Graficas/Pay';
import Barras from './Graficas/Barras';
import Tabla from './Graficas/Tabla';

function Seccion1Reporte3() {
    return (
        <>
            <Titulo texto="Reporte 3: Errores en CURP/RFC" />
            <Container>
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
                        <h4><span class="lnr lnr-chevron-right"></span> Número de Errores de contenido en RFC/CURP por reporte</h4>
                        <hr />
                        <Barras />
                    </Col>
                    <Col>
                        <h4><span class="lnr lnr-chevron-right"></span> Personas físicas en registros con errores de CURP</h4>
                        <hr />
                        <Tabla />
                    </Col>
                    <Col>
                        <h4><span class="lnr lnr-chevron-right"></span> Errores en etiquetas por mal uso de catálogos</h4>
                        <hr />
                        <Pay />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <hr />
                        <h4><span class="lnr lnr-chevron-right"></span> Personas físicas con CURP inválidos/Personas morales con RFC inválido</h4>
                        <hr />
                        <Tabla />
                    </Col>
                    <Col>
                        <hr />
                        <h4><span class="lnr lnr-chevron-right"></span> Tabla con errores<br />relacionados por registro</h4>
                        <hr />
                        <Tabla />
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Seccion1Reporte3;