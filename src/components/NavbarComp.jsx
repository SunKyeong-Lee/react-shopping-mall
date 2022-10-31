import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCrown } from "@fortawesome/free-solid-svg-icons";
import { NavLink, useNavigate } from "react-router-dom";
import { useState, useContext, useEffect } from "react";
import DataContext from "../context/DataContext";

function NavbarComp() {
  const [login, setLogin] = useState(true);
  const data = useContext(DataContext); // 전체를 가져올 때
  // const {state} = useContext(DataContext); // 일부(state)만 가져올 때
  const navigate = useNavigate(); // 네비게이터

  // 컴포넌트가 마운트 되자마자 로그인 정보 확인
  useEffect(() => {
    setLogin(data.state.user ? true : false);
  }, [data.state.user]);  // 새로 로그인을 했을 때 화면이 바뀌게 설정 []

  // 로그아웃을 위한 이벤트 함수
  const logOut = () => {
    setLogin(false); // 컴포넌트를 바꿔주기 위해 수정
    data.action.setUser(null); // user의 값을 null로 바꿔줌
    navigate("/"); // 로그아웃을 하면 home으로 이동
  };

  return (
    <>
      {/* 확인용
        {console.log(data)}
        {console.log(state)}
      */}
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>
            <FontAwesomeIcon icon={faCrown} />
            {"  "}SHOP
          </Navbar.Brand>
          <Nav className="me-auto">
            <NavLink to="/" className="nav-link">
              Home
            </NavLink>
          </Nav>

          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            {login ? (
              <Nav>
                {/** 로그인 되었을 때 출력될 컴포넌트 */}
                <NavLink className="nav-link" to="/mypage">
                  {data.state.user.name}님의 MyPage
                </NavLink>
                <Button variant="outline-light" onClick={logOut}>
                  LogOut
                </Button>{" "}
              </Nav>
            ) : (
              <Nav>
                {/** 로그인이 되지 않았을 때 출력될 컴포넌트 */}
                <Button
                  variant="outline-light"
                  onClick={() => {
                    navigate("/loginform");
                  }}
                >
                  Login
                </Button>{" "}
              </Nav>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavbarComp;
