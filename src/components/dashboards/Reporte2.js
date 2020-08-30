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

function Reporte2() {
    const tablaHeader1 = ["Archivos", "Fecha", "Tipos de cambio utilizados por la institución financiera", "Tipo de cambio DOF (día habil inmediato anterior a la fecha de operación)"];
    const tablaContenido1 = ["Rel01T1", "20190101", "19.28", "19.28"];
    const tablaHeader2 = ["Fecha", "Fecha del registro", "Monto en pesos reportado en el reporte", "Monto en dólares utilizando tipo de cambio usado por la Institución Financiera", "Monto en dólares utilizando tipo de cambio DOF (día habil inmediato anterior a la fecha de la operación)"];
    const tablaContenido2 = ["20190101", "2", "$ 170,980.00", "USD $7500", "USD $7500"];
    return (
        <>
            <Titulo texto="Validación de tipo de cambio regulatorio para uso institucional y cálculo de montos en Reporte de Operaciones Relevantes" />
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
                        <h4><span className="lnr lnr-chevron-right"></span> Número de registros por día afectados por el mal uso del tipo de cambio</h4>
                        <hr />
                        <XYChart />
                    </Col>
                    <Col>
                        <h4><span className="lnr lnr-chevron-right"></span> Fechas donde estuvo mal el tipo de cambio</h4>
                        <hr />
                        <div style={{height: '350px'}}>
                            <Calendar />
                        </div>
                    </Col>
                    <Col>
                        <h4><span className="lnr lnr-chevron-right"></span> Porcentaje de fechas con tipo de cambio correcto e incorrecto</h4>
                        <hr />
                        <Pay />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <hr/>
                        <Tabla
                            tablaHeader={[...tablaHeader1]}
                            contenido={tablaContenido1}
                        />
                    </Col>
                    <Col>
                    <hr/>
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

export default Reporte2;