import 'bootstrap/dist/css/bootstrap.min.css';
import {  Col, Container, Row } from 'react-bootstrap';
import Hero from './Components/Hero';
import Content from './Components/Content';
import { useEffect } from 'react';
import ReactGA from 'react-ga';
import Spotlight from './Components/Spotlight';

export default function Home() {
  return (
    <div className= "app">
      <Container>
      <Spotlight />
        <Row className=''>
          <Col md={6}><Hero /></Col>
          <Col md={6}><Content /></Col>
        </Row>
      </Container>
    </div>
  )
}
