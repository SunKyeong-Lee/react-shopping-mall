import { useState, useEffect, useContext } from "react";
import { Container, ListGroup } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Comment from "../components/Comment";
import CommentInput from "../components/CommentInput";
import ProductDisplay from "../components/ProductDisplay";
import DataContext from "../context/DataContext";

const ProductDetail = () => {
  const data = useContext(DataContext);
  const [comments, setComments] = useState("");

  const { id } = useParams();

  // 시작하자마자 값을 들고와서 출력함
  useEffect(() => {}, []);

  // data의 state의 값을 바로 수정해서 사용
  const getProduct = () => {
    return data.state.productList.find((product) => product.productId == id);
  };

  return (
    <div>
      <ProductDisplay product={getProduct()} /> {/** 결과값을 넣기위해 () */}
      <CommentInput />
      <Container className="mt-3">
        <ListGroup>
          { // 월요일에 정리 예정
            data.state.allComments
              .filter((comment) => comment.productId == id)
              .map((comment) => (<Comment />))
          }
        </ListGroup>
      </Container>
    </div>
  );
};

export default ProductDetail;
