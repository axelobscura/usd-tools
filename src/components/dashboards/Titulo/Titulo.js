import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Titulo(props) {
    return (
        <>
            <Container>
                <Row>
                    <Col>
                        <h1><span class="lnr lnr-arrow-right"></span> {props.texto}</h1>
                        <hr />
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Titulo;