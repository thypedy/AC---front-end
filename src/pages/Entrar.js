import { Card, Form, Container, Row, Col, Button } from 'react-bootstrap';

function Entrar() {
    return (
      <div>
        <Container className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
      <Row>
        <Col>
          <Card bg="dark" text="white">
            <Card.Body>
              <Form>
              
              <Button variant="secondary" href="/">
                  Voltar
                </Button>

                <br/>

              <h2>Entrar</h2>
              <br/>

                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="name@example.com" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>

                <Button variant="secondary" className="w-100" type="submit" href="#">
                  Confirmar
                </Button>

              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>

      </div>
    );
  }
  
  export default Entrar;