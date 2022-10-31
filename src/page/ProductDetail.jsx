import { useState, useEffect, useContext } from "react";
import { Container, ListGroup } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Comment from "../components/Comment";
import CommentInput from "../components/CommentInput";
import ProductDisplay from "../components/ProductDisplay";
import DataContext from "../context/DataContext";

const ProductDetail = () => {
  const data = useContext(DataContext);
  const { id } = useParams();
  const [comments, setComments] = useState(
    data.state.allComments.filter((comment) => comment.productId == id)
  );

  // state.allComment 값이 바뀔 때마다 업데이트
  useEffect(() => {
    setComments(
      data.state.allComments.filter((comment) => comment.productId == id)
    );
  }, [data.state.allComments]);

  // data의 state의 값을 바로 수정해서 사용
  const getProduct = () => {
    return data.state.productList.find((product) => product.productId == id);
  };

  return (
    <div>
      <ProductDisplay product={getProduct()} /> {/** 결과값을 넣기위해 () */}
      <CommentInput id={id} />
      <Container className="mt-3 mb-5">
        <ListGroup>
          {comments.map((comment) => (
            <Comment key={comment.commentId} comment={comment} />
          ))}
        </ListGroup>
      </Container>
    </div>
  );
};

export default ProductDetail;
