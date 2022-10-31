import { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";

const ProductDisplay = (props) => {
  const { product } = props;
  const [index, setIndex] = useState(0);

  return (
    <div>
      <Container style={{ height: "456px", overflow: "hidden" }}>
        <Row style={{ height: "100%" }}>
          <Col xs={6} style={{ height: "100%" }}>
            <div>
              <img
                src={require(`../img/${product.productPicture[index]}`)}
                style={{ width: "100%", minHeight: "486px", objectFit: "cover" }}
              />
            </div>
          </Col>
          <Col style={{ height: "100%" }}>
            <div
              className="text-sm-start"
              style={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <h1 className="mb-4">{product.productName}</h1>
              <p>{product.productDetail}</p>
              <div>
                <hr />
                <p>색상</p>
                {
                  // productColor에 있는 color 값을 백그라운드로 사용
                  product.productColor.map((color, i) => (
                    <div
                      className="m-2"
                      style={{
                        display: "inline-block",
                        width: "3rem",
                        height: "3rem",
                        borderRadius: "50%",
                        backgroundColor: color,
                      }}
                      onMouseEnter={() => {
                        setIndex(i);
                      }}
                    ></div>
                  ))
                }
              </div>
              <div className="d-grid gap-2" style={{marginTop: "auto"}}>
                <Button variant="secondary" size="lg">
                  구매하기
                </Button>
                <Button variant="secondary" size="lg">
                  찜하기
                </Button>
                <Button variant="secondary" size="lg">
                  장바구니
                </Button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ProductDisplay;
