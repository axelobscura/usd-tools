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

function Reporte1() {
    const tablaHeader1 = ["Archivo", "Periodo de la operación", "Numero del registro", "Número de cuenta", "Nombre / Denominación", "RFC", "CURP", "Fecha de nacimiento / constitución", "Nacionalidad", "Localidad", "Domicilio","Actividad Económica","Tipo de operación","Fecha de la operación","Instrumento monetario","Monto","Moneda"];
    const tablaContenido1 = ["TIF_01", "201901", "MT-103-1", "787873882", "Pedro Sanchez Vitral", "SAVI9012233V7", "SAVI9012233V7", "201201223", "Mexicana", "Guaymas", "Juan Salvador Agraz 97, Cuajimalpa, 007678 CDMX","Agricultor","Deposito","20190304","Efectivo","$6.576.545,00","Pesos"];
    return (
        <>
            <Titulo texto="Análisis de registros en reporte de operaciones relevantes no reportados en reporte de dólares en efectivo." />
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
                        <Pay />
                    </Col>
                    <Col>
                        <h4><span className="lnr lnr-chevron-right"></span> Tendencia de registros de operaciones relevantes en dolares que no estan presentes en el reporte de dolares en efectivo</h4>
                        <hr />
                        <Multilineas />
                    </Col>
                    <Col>
                        <h4><span className="lnr lnr-chevron-right"></span> Montos por registro de Operaciones relevantes en dolares no reportadas en el reporte de dolares en efectivo</h4>
                        <hr />
                        <XYChart />
                    </Col>
                </Row>
                <Row>
                    <Col>
                    <hr/>
                    <h4><span className="lnr lnr-chevron-right"></span> Registros en reporte de operaciones relevantes no reportados en reporte de dólares en efectivo</h4>
                    <hr/>
                    <Tabla
                        tablaHeader={[...tablaHeader1]}
                        contenido={tablaContenido1}
                    />
                    </Col>
                </Row>
                <Row className="mt-3">
                    <Col>
                        <hr />
                        <h4><span class="lnr lnr-chevron-right"></span> Numero de Registros de Operaciones relevantes en dolares no reportados en el reporte de operaciones relevantes por dia</h4>
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

export default Reporte1;