// Context에 대한 내용은 공식 홈페이지 참고
// Context를 사용해서 value값도 현재 파일에서 지정하고 내보내기

import { useState } from "react";
import { createContext } from "react";

// 내보낸 DataContext에 value를 넣어줘서 사용
const DataContext = createContext();

// 미리 Provider를 작성하여 value 값을 가진 컴포넌트를 내보냄
const DataProvider = ({ children }) => {
  // 사용할 값들을 useState를 통해 값을 들고옴
  // 유저 정보 { name: '홍길동', profile: 사진, likelist: [찜목록] }
  const [user, setUser] = useState({
    name: "홍길동",
    profile: null,
    likelist: [],
  });

  // 상품 정보 : 삼품 배열로 들어감
  const [productList, setproductList] = useState([
    {
      productId: 1,
      productName: "녹차잎 머들러 1",
      productDetail: "음료에 올려놓은 장식 잎처럼 보이는 롱 머들러",
      productColor: ["yellowgreen", "green"],
      productPicture: ["1.jpg", "1-2.jpg"]
    },
    {
      productId: 2,
      productName: "녹차잎 머들러 2",
      productDetail: "음료에 올려놓은 장식 잎처럼 보이는 롱 머들러",
      productColor: ["green"],
      productPicture: ["2.jpg"]
    },
    {
      productId: 3,
      productName: "녹차잎 머들러 3",
      productDetail: "음료에 올려놓은 장식 잎처럼 보이는 롱 머들러",
      productColor: ["green"],
      productPicture: ["3.jpg"]
    },
    {
      productId: 4,
      productName: "녹차잎 머들러 4",
      productDetail: "음료에 올려놓은 장식 잎처럼 보이는 롱 머들러",
      productColor: ["yellowgreen", "green"],
      productPicture: ["1.jpg", "1-2.jpg"]
    },
    {
      productId: 5,
      productName: "녹차잎 머들러 5",
      productDetail: "음료에 올려놓은 장식 잎처럼 보이는 롱 머들러",
      productColor: ["green"],
      productPicture: ["2.jpg"]
    },
    {
      productId: 6,
      productName: "녹차잎 머들러 6",
      productDetail: "음료에 올려놓은 장식 잎처럼 보이는 롱 머들러",
      productColor: ["green"],
      productPicture: ["3.jpg"]
    },
  ]);

  // 댓글 정보
  const [allComments, setAllComments] = useState([
    {
      commentId: 1,
      productId: 1,
      name: "홍길동",
      text: "제품에 관한 리뷰입니다 2"
    },
    {
      commentId: 2,
      productId: 1,
      name: "성춘향",
      text: "제품에 관한 리뷰입니다 2"
    }
  ]);

  const [commentCount, setCommentCount] = useState(3);

  // 사용할 value 값을 state와 action으로 분리해서 넣어둠
  const value = {
    state: { user, productList, allComments, commentCount },
    action: { setUser, setproductList, setAllComments, setCommentCount },
  };

  // DataProvider를 사용할 때 DataContext.Provider를 사용할 수 있도록 함
  // 이때 children은 Provider를 쓸 때 데이터를 공용으로 쓰는 컴포넌트들
  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};

// Consumer 작성
// DataContext의 값을 가져와서 DataConsumer로 사용
const { Consumer: DataConsumer } = DataContext;

// 컴포넌트로 사용하기 위해 export > .Provider 대신 사용할 컴포넌트 : App 전체를 감쌈
export { DataConsumer, DataProvider };
// 값을 사용하기 위해 가져오는 컨텍스트 export > 각 컴포넌트에서 useContext로 가져올 것
export default DataContext;
