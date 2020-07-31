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
import Seccion2Reporte4 from './components/dashboards/Seccion2Reporte4';
import Seccion3Reporte1 from './components/dashboards/Seccion3Reporte1';
import Seccion3Reporte2 from './components/dashboards/Seccion3Reporte2';
import Seccion3Reporte3 from './components/dashboards/Seccion3Reporte3';
import Seccion3Reporte4 from './components/dashboards/Seccion3Reporte4';
import Seccion3Reporte5 from './components/dashboards/Seccion3Reporte5';
import RelevantesSeccion1Reporte1 from './components/dashboards/RelevantesSeccion1Reporte1';
import RelevantesSeccion1Reporte2 from './components/dashboards/RelevantesSeccion1Reporte2';
import RelevantesSeccion1Reporte3 from './components/dashboards/RelevantesSeccion1Reporte3';
import RelevantesSeccion1Reporte4 from './components/dashboards/RelevantesSeccion1Reporte4';
import RelevantesSeccion2Reporte1 from './components/dashboards/RelevantesSeccion2Reporte1';
import RelevantesSeccion2Reporte2 from './components/dashboards/RelevantesSeccion2Reporte2';
import RelevantesSeccion2Reporte3 from './components/dashboards/RelevantesSeccion2Reporte3';
import RelevantesSeccion2Reporte4 from './components/dashboards/RelevantesSeccion2Reporte4';
import './App.css';

function App() {
  return (
    <>
      <Router basename={`${process.env.PUBLIC_URL}/gestell/g20/`}>
        <Header />
        <Container fluid={true} className="p-0 m-0">
          <Row className="p-0 m-0">
            <Col xs={1} md={1} className="menulateral p-0 m-0">
              <MenuLateral />
            </Col>
            <Col xs={11} md={11} className="p-4 m-0">
              <Switch>
                <Route exact path="/" component={Seccion1Reporte1} />
                <Route exact path="/seccion-uno-reporte-dos" component={Seccion1Reporte2} />
                <Route exact path="/seccion-uno-reporte-tres" component={Seccion1Reporte3} />
                <Route exact path="/seccion-uno-reporte-cuatro" component={Seccion1Reporte4} />
                <Route exact path="/seccion-uno-reporte-cinco" component={Seccion1Reporte5} />
                <Route exact path="/seccion-dos-reporte-uno" component={Seccion2Reporte1} />
                <Route exact path="/seccion-dos-reporte-dos" component={Seccion2Reporte2} />
                <Route exact path="/seccion-dos-reporte-tres" component={Seccion2Reporte3} />
                <Route exact path="/seccion-dos-reporte-cuatro" component={Seccion2Reporte4} />
                <Route exact path="/seccion-tres-reporte-uno" component={Seccion3Reporte1} />
                <Route exact path="/seccion-tres-reporte-dos" component={Seccion3Reporte2} />
                <Route exact path="/seccion-tres-reporte-tres" component={Seccion3Reporte3} />
                <Route exact path="/seccion-tres-reporte-cuatro" component={Seccion3Reporte4} />
                <Route exact path="/seccion-tres-reporte-cinco" component={Seccion3Reporte5} />
                <Route exact path="/relevantes-seccion-uno-reporte-uno" component={RelevantesSeccion1Reporte1} />
                <Route exact path="/relevantes-seccion-uno-reporte-dos" component={RelevantesSeccion1Reporte2} />
                <Route exact path="/relevantes-seccion-uno-reporte-tres" component={RelevantesSeccion1Reporte3} />
                <Route exact path="/relevantes-seccion-uno-reporte-cuatro" component={RelevantesSeccion1Reporte4} />
                <Route exact path="/relevantes-seccion-dos-reporte-uno" component={RelevantesSeccion2Reporte1} />
                <Route exact path="/relevantes-seccion-dos-reporte-dos" component={RelevantesSeccion2Reporte2} />
                <Route exact path="/relevantes-seccion-dos-reporte-tres" component={RelevantesSeccion2Reporte3} />
                <Route exact path="/relevantes-seccion-dos-reporte-cuatro" component={RelevantesSeccion2Reporte4} />
              </Switch>
            </Col>
          </Row>
        </Container>
      </Router>
    </>
  );
}

export default App;
