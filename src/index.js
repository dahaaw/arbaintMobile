import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import {Container, Row, Col} from 'react-bootstrap';

import './index.css';
import 'antd/dist/antd.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import App from './App';
import Footer from './Layouts/Footer';
import Home from './Pages/Home';
import {Login,Profile} from './Pages/User/index';


ReactDOM.render(
  <BrowserRouter>
    <Switch>
        <Container className="text-muted">
        <Row  className="justify-content-center">
          <Col sm={7} lg={5}>

            <Route path="/" exact component={Home}/>
            <Route path="/promo" component={Profile}/>
            <Route path="/user/cart" component={Profile}/>
            <Route path="/user/favourite" component={Profile}/>
            <Route path="/user/profile" component={Login}/>
            <div style={{height:55}}></div>
          </Col>
        </Row>
        <Footer />
      </Container>
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
