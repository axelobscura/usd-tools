import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Titulo from './Titulo/Titulo';

import Am from './Graficas/Am';
import PolarArea from './Graficas/PolarArea';
import CalHeat from './Graficas/CalHeat';

function Seccion1Reporte5() {
    return (
        <>
            <Titulo texto="Reporte 5: Visualizador de etiquetas y registros" />
            <Container>
                <Row>
                    <Col>
                        <h4><span class="lnr lnr-chevron-right"></span> Composición del reporte</h4>
                        <hr />
                        <PolarArea />
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
                        <CalHeat />
                    </Col>

                </Row>
            </Container>
        </>
    )
}

export default Seccion1Reporte5;