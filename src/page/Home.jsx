import { Container, Row, Col } from "react-bootstrap";
// 슬릭 라이브러리 추가
import Slider from "react-slick";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareCaretRight, faSquareCaretLeft } from "@fortawesome/free-solid-svg-icons";
import ProductCard from "../components/ProductCard";
import { useContext } from "react";
import DataContext from "../context/DataContext";

const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const { state } = useContext(DataContext);

  return (
    <div>
      <Container>
        <Row className="mt-3">
          <Col className="px-5">
            <Slider {...settings}>
              {state.productList.map((product) => (
                <div key={product.productId}>
                  <ProductCard product={product} />
                </div>
              ))}
            </Slider>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;

// slick custom arrow
function CustomNextArrow(props) {
  const { className, onClick } = props;
  return (
    <FontAwesomeIcon
      icon={faSquareCaretRight}
      className={className}
      style={{ color: "#212529" }}
      onClick={onClick}
    />
  );
}

function CustomPrevArrow(props) {
  const { className, onClick } = props;
  return (
    <FontAwesomeIcon 
      icon={faSquareCaretLeft}
      className={className}
      style={{ color: "#212529" }}
      onClick={onClick}
    />
  );
}
