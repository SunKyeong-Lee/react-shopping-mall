import { ListGroup } from "react-bootstrap";

const Comment = () => {
  return (
    <ListGroup.Item style={{textAlign: "start"}}>
      <h4>이름</h4>
      <p>댓글 내용</p>
    </ListGroup.Item>
  );
}

export default Comment;