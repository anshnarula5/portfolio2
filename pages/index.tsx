import 'bootstrap/dist/css/bootstrap.min.css';
import {  Col, Container, Row } from 'react-bootstrap';
import Hero from './Components/Hero';

export default function Home() {
  return (
    <div className= "app">
      <Container className= "pt-5">
        <Row>
          <Col md={6}><Hero /></Col>
          <Col md={6}><Hero /></Col>
        </Row>
      </Container>
    </div>
  )
}
