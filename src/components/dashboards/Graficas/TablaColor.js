import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';

function TablaColor() {
    return (
        <>
            <Container>
                <Row>
                    <Col style={{ maxHeight: '250px', overflow: 'auto' }}>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th style={{ background: 'green', color: '#fff'}}>Número de registro</th>
                                    <th style={{ background: 'green', color: '#fff'}}>Número de errores</th>
                                    <th style={{ background: 'green', color: '#fff'}}>Etiquets erróneas</th>
                                    <th style={{ background: 'green', color: '#fff'}}>Mensaje del error</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>MT 001</td>
                                    <td>4</td>
                                    <td>blc_aba</td>
                                    <td style={{ background: 'red', color: '#fff'}}>Campo no es alfanumérico</td>
                                </tr>
                                <tr>
                                    <td>MT 001</td>
                                    <td>4</td>
                                    <td>blc_aba</td>
                                    <td style={{ background: 'yellow', color: '#000'}}>Campo no es alfanumérico</td>
                                </tr>
                                <tr>
                                    <td>MT 001</td>
                                    <td>4</td>
                                    <td>blc_aba</td>
                                    <td style={{ background: 'yellow', color: '#000'}}>Campo no es alfanumérico</td>
                                </tr>
                                <tr>
                                    <td>MT 001</td>
                                    <td>4</td>
                                    <td>blc_aba</td>
                                    <td style={{ background: 'green', color: '#fff'}}>Campo no es alfanumérico</td>
                                </tr>
                                <tr>
                                    <td>MT 001</td>
                                    <td>4</td>
                                    <td>blc_aba</td>
                                    <td>Campo no es alfanumérico</td>
                                </tr>
                                <tr>
                                    <td>MT 001</td>
                                    <td>4</td>
                                    <td>blc_aba</td>
                                    <td>Campo no es alfanumérico</td>
                                </tr>
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default TablaColor;