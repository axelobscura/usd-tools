import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Titulo from './Titulo/Titulo';
import Form from 'react-bootstrap/Form';
import Pay from './Graficas/Pay';
import Multilineas from './Graficas/Multilineas';
import XYChart from './Graficas/XYChart';
import Tabla from './Graficas/Tabla';
import Calendar from './Graficas/Nivo/Calendar';
import MapBubbles from './Graficas/MapBubbles';
import Stacked from './Graficas/Stacked';
import Barras from './Graficas/Barras';

function Reporte1() {
    const tablaHeader1 = ["Número de registros","Error en RFC","RFC","Error en CURP","CURP","Error en fecha de nacimiento","Fecha de nacimiento"];
    const tablaContenido1 = ["1","Si","AST120113RK5","Si","No puede existir CURP pues existe RFC","N/A","N/A"];
    return (
        <>
            <Titulo texto="Clientes y usuarios con operaciones diarias y mensuales fuera de limite en Reporte de Dólares en efectivo" />
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
                        <MapBubbles />
                    </Col>
                    <Col>
                        <h4><span className="lnr lnr-chevron-right"></span> Monto de operaciones en dólares en efectivo fuera del límite por clientes personas físicas/usuarios de acuerdo a sucursal</h4>
                        <hr />
                        <Stacked />
                    </Col>
                    <Col>
                        <h4><span className="lnr lnr-chevron-right"></span> Tendencia de registros con operaciones en dólares en efectivo fuera de límite por geografía/sucursal</h4>
                        <hr />
                        <Multilineas />
                    </Col>
                </Row>
                <Row className="mt-3">
                    <Col xs="4">
                        <h4><span className="lnr lnr-chevron-right"></span> Usuarios que exceden limite diario</h4>
                        <hr />
                        <Barras />
                    </Col>
                    <Col>
                        <Tabla
                            tablaHeader={[...tablaHeader1]}
                            contenido={tablaContenido1}
                        />
                    </Col>
                </Row>
                <Row className="mt-3">
                    <Col xs="4">
                        <h4><span className="lnr lnr-chevron-right"></span> Usuarios que exceden limite mensual</h4>
                        <hr />
                        <Barras />
                    </Col>
                    <Col>
                        <Tabla
                            tablaHeader={[...tablaHeader1]}
                            contenido={tablaContenido1}
                        />
                    </Col>
                </Row>
                <Row className="mt-3">
                    <Col xs="4">
                        <h4><span className="lnr lnr-chevron-right"></span> Clientes personas físicas que exceden límite diario</h4>
                        <hr />
                        <Barras />
                    </Col>
                    <Col>
                        <Tabla
                            tablaHeader={[...tablaHeader1]}
                            contenido={tablaContenido1}
                        />
                    </Col>
                </Row>
                <Row className="mt-3">
                    <Col xs="4">
                        <h4><span className="lnr lnr-chevron-right"></span> Clientes personas físicas que exceden límite mensual</h4>
                        <hr />
                        <Barras />
                    </Col>
                    <Col>
                        <Tabla
                            tablaHeader={[...tablaHeader1]}
                            contenido={tablaContenido1}
                        />
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Reporte1;