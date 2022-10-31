import { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import DataContext from "../context/DataContext";

function Login() {
  const [name, setName] = useState("");
  const { action } = useContext(DataContext);
  const navigate = useNavigate();

  const loginUser = () => {
    action.setUser({
      name: name,
      profile: null,
      likelist: [],
    });
    navigate("/");
  };

  return (
    <Form className="m-5" onSubmit={loginUser}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>아이디</Form.Label>
        <Form.Control
          type="text"
          placeholder="아이디를 입력해주세요"
          style={{ width: "20rem", margin: "auto"}}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>비밀번호</Form.Label>
        <Form.Control 
          type="password" 
          placeholder="비밀번호를 입력해주세요"
          style={{ width: "20rem", margin: "auto"}} 
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        로그인
      </Button>
    </Form>
  );
}

export default Login;
