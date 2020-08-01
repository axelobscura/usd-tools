import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Titulo from './Titulo/Titulo';
import Form from 'react-bootstrap/Form';
import Pay from './Graficas/Pay';
import Multilineas from './Graficas/Multilineas';
import TablaColor from './Graficas/TablaColor';

function RelevantesSeccion2Reporte5() {
    return (
        <>
            <Titulo texto="Reporte 8: Análisis de registros en reporte de operaciones relevantes por actividad económica" />
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
                        <h4><span className="lnr lnr-chevron-right"></span> Frecuencia de coincidencias de personas fisicas / morales presentes en reporte de operaciones relevantes  en listas negras</h4>
                        <hr />
                        <Multilineas />
                    </Col>
                </Row>
                <Row>
                    <Col>
                    <hr />
                    <h4><span className="lnr lnr-chevron-right"></span> Personas en registros  en la lista de personas bloqueadas</h4>
                        <hr />
                        <TablaColor />
                    </Col>
                    <Col>
                    <hr />
                    <h4><span className="lnr lnr-chevron-right"></span> Numero de personas en reporte coincidentes o no coincidentes en lista de personas bloqueadas</h4>
                        <hr />
                        <Pay />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <TablaColor />
                    </Col>
                    <Col>
                        <Pay />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <TablaColor />
                    </Col>
                    <Col>
                        <Pay />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <TablaColor />
                    </Col>
                    <Col>
                        <Pay />
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default RelevantesSeccion2Reporte5;