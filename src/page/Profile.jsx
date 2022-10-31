import { useContext } from "react";
import { Col, Container, Row } from "react-bootstrap";
import ProfileUpdateModal from "../components/ProfileUpdateModal";
import DataContext from "../context/DataContext";

const Profile = () => {
  const { state } = useContext(DataContext);

  return (
    <div>
      <Container>
        <Row>
          <Col>
            {/* 프로필 사진과 사진을 수정할 모달창 */}
            {state.user.profile ? (
              <div
                style={{
                  width: "200px",
                  height: "200px",
                  backgroundImage: `url(${state.user.profile})`,
                  backgroundSize: "cover",
                  margin: "auto",
                  marginBottom: "5px"
                }}
              />
            ) : (
              <div
                style={{
                  width: "200px",
                  height: "200px",
                  backgroundColor: "lightgrey",
                  margin: "auto",
                  marginBottom: "5px"
                }}
              />
            )}
            <ProfileUpdateModal />
          </Col>
          <Col>
            {/* 이름과 찜목록을 출력 */}
            <h2>{state.user.name}</h2>
            <h2>찜목록</h2>
            <hr />
            <ul>
              {state.user.likelist.map((like) => (
                <li>{like.productName}</li>
              ))}
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Profile;
