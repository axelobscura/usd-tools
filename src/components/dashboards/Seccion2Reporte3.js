import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Titulo from './Titulo/Titulo';
import Saunky from './Graficas/Saunky';
import Saunky2 from './Graficas/Saunky2';
import Tabla from './Graficas/Tabla';

function Seccion2Reporte3() {
    return (
        <>
            <Titulo texto="Reporte 8: Transferencias Internacionales de Fondos de Personas Físicas mayores de 80 años, menores de edad y Personas morales con menos de 3 años de constitución" />
            <Container>
                <Row>
                    <Col>
                        <h4><span className="lnr lnr-chevron-right"></span> Flujos de transferencias envío/recepción de personas físicas mayores de 80 años y menores de edad</h4>
                        <hr />
                        <Saunky />
                    </Col>
                    <Col>
                        <h4><span className="lnr lnr-chevron-right"></span> Flujos de transferencias envío/recepción de personas morales con menos de tres años de constitución</h4>
                        <hr />
                        <Saunky2 />
                    </Col>
                </Row>
                <Row className="mt-5">
                    <Col>
                        <h4>
                            <span className="lnr lnr-chevron-right"></span> Registros con operaciones de envío/recepción en reportes de personas físicas mayores de 80 años y menores de edad
                        </h4>
                        <hr />
                        <Tabla />
                    </Col>
                    <Col>
                        <h4>
                            <span className="lnr lnr-chevron-right"></span> Registros con operaciones de envío/recepción en reportes de personas físicas mayores de 80 años y menores de edad
                        </h4>
                        <hr />
                        <Tabla />
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Seccion2Reporte3;