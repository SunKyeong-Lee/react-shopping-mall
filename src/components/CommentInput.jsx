import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Col, Container, Row } from "react-bootstrap";

function CommentInput() {
  return (
    <Container className="mt-5">
      <Row>
        <Col>
          <FloatingLabel controlId="floatingTextarea2" label="Comments">
            <Form.Control
              as="textarea"
              placeholder="Leave a comment here"
              style={{ height: "100px" }}
            />
          </FloatingLabel>
        </Col>
        <Col xs={3}>
          <Button variant="primary" style={{ height: "100px", width: "100%" }}>
            Comment
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default CommentInput;
