import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from "react-router-dom";

function Landing() {
    return (
        <>
            <Container style={{ marginTop: '100px'}}>
                <Row>
                    <Col className="secciones">
                        <Link to="/reporte1"><b>Reporte 1</b></Link>
                    </Col>
                    <Col className="secciones">
                        <Link to="/reporte2"><b>Reporte 2</b></Link>
                    </Col>
                    <Col className="secciones">
                        <Link to="/reporte3"><b>Reporte 3</b></Link>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Landing;