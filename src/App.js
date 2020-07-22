import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import MenuLateral from './components/MenuLateral';
import Seccion1Reporte1 from './components/dashboards/Seccion1Reporte1';
import Seccion1Reporte2 from './components/dashboards/Seccion1Reporte2';
import Seccion1Reporte3 from './components/dashboards/Seccion1Reporte3';
import Seccion1Reporte4 from './components/dashboards/Seccion1Reporte4';
import Seccion1Reporte5 from './components/dashboards/Seccion1Reporte5';
import Seccion2Reporte1 from './components/dashboards/Seccion2Reporte1';
import Seccion2Reporte2 from './components/dashboards/Seccion2Reporte2';
import Seccion2Reporte3 from './components/dashboards/Seccion2Reporte3';
import './App.css';

function App() {
  return (
    <>
      <Router basename={`${process.env.PUBLIC_URL}/`}>
        <Header />
        <Container fluid={true} className="p-0 m-0">
          <Row className="p-0 m-0">
            <Col xs={2} md={2} className="menulateral p-0 m-0">
              <MenuLateral />
            </Col>
            <Col xs={10} md={10} className="p-4 m-0">
              <Switch>
                <Route exact path="/" component={Seccion1Reporte1} />
                <Route exact path="/seccion-uno-reporte-dos" component={Seccion1Reporte2} />
                <Route exact path="/seccion-uno-reporte-tres" component={Seccion1Reporte3} />
                <Route exact path="/seccion-uno-reporte-cuatro" component={Seccion1Reporte4} />
                <Route exact path="/seccion-uno-reporte-cinco" component={Seccion1Reporte5} />
                <Route exact path="/seccion-dos-reporte-uno" component={Seccion2Reporte1} />
                <Route exact path="/seccion-dos-reporte-dos" component={Seccion2Reporte2} />
                <Route exact path="/seccion-dos-reporte-tres" component={Seccion2Reporte3} />
              </Switch>
            </Col>
          </Row>
        </Container>
      </Router>
    </>
  );
}

export default App;
