import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Col, Container, Row } from "react-bootstrap";
import { useState } from "react";
import { useContext } from "react";
import DataContext from "../context/DataContext";
import { useParams } from "react-router-dom";

function CommentInput() {
  const {id} = useParams();
  const [textInput, setTextInput] = useState("");
  const { state, action } = useContext(DataContext);

  // 버튼을 눌렀을 때 코멘트 추가
  const addComment = () => {
    console.log("확인")
    // 새로운 코멘트 객체 생성
    const comment = {
      commentId: state.commentCount, // 계속해서 증가해야하는 값
      productId: id, // 현재 id 값을 가져오기 : param값 > 부모로부터 받아오기
      name: (state.user ? state.user.name : "익명"), // user를 통해 받아옴. 단 user의 값이 null일 경우 빈값
      text: textInput, // textInput을 넣어줌
    };
    // 새로운 코멘트 객체를 state의 allComment에 연결
    action.setAllComments(state.allComments.concat(comment));
    action.setCommentCount(state.commentCount + 1);
    console.log(state.allComments);
  };

  return (
    <Container className="mt-5">
      <Row>
        <Col>
          <FloatingLabel controlId="floatingTextarea2" label="Comments">
            <Form.Control
              as="textarea"
              placeholder="Leave a comment here"
              style={{ height: "100px" }}
              onChange={(e) => {
                setTextInput(e.target.value);
              }}
            />
          </FloatingLabel>
        </Col>
        <Col xs={3}>
          <Button
            variant="primary"
            style={{ height: "100px", width: "100%" }}
            onClick={addComment}
          >
            Comment
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default CommentInput;
