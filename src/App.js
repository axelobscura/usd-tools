import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Landing from './components/Landing';
import Reporte1 from './components/dashboards/Reporte1';
import Reporte2 from './components/dashboards/Reporte2';
import Reporte3 from './components/dashboards/Reporte3';
import './App.css';

function App() {
  return (
    <>
      <Router basename={`${process.env.PUBLIC_URL}/`}>
        <Header />
        <Container fluid={true} className="p-0 m-0">
          <Row className="p-0 m-0">
            <Col xs={12} md={12} className="p-4 m-0">
              <Switch>
                <Route exact path="/" component={Landing} />
                <Route exact path="/reporte1" component={Reporte1} />
                <Route exact path="/reporte2" component={Reporte2} />
                <Route exact path="/reporte3" component={Reporte3} />
              </Switch>
            </Col>
          </Row>
        </Container>
      </Router>
    </>
  );
}

export default App;
