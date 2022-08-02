import { useState } from "react";
import Header from "./Header";
import Jokes from "./Jokes";
import Form from "./Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import './index.css';



// Trong project này ta sử dụng app components như là một single page application 
// ở đây ta sẽ khai báo state và effect cho trang của chúng ta

function App({ className }) {
  // use state PHẢI được khai báo bên trong function
  // useState được gắn vào các thành phần động hoặc các element cần sử dụng javascript
  // ví dụ như danh sách sản phẩm các input trong form hoặc các button ect... 
  // useState sẽ có hai thành phần đó là phần data và phần function để thay đổi data
  // data của useState thông thường là một mảng hoặc một object
  // setjoke là một function để thay đổi data của joke
  const [jokeList, setJoke] = useState(["example joke"]);
  // ta tạo thêm một state nữa là newJoke để thêm joke mới vào danh sách
  const [newJoke, setNewJoke] = useState("");

  const getJokeInputValue = (e) => {
    setNewJoke(e.target.value);
  }


  const addJokeClick = () => {
    // set joke sẽ thay đổi data của newJoke và sẽ render lại trang
    // vì tính chất immutable của react nên ta phải tạo ra một mảng mới :v
    setJoke([...jokeList, newJoke]);
  }
  return (
    <Container className="mainContainer">
      {/* ta có thể truyền setState và data mặc định vào prob và có thể truyền tất cả hoặc một phần vào các component khác nhau */}
      {/* ở header có button add nên ta truyền hàm có chứa setJoke cho nó */}
      <Row>
        <Header />
      </Row>
      <Row>
        <Form saveJokeInput={getJokeInputValue} addJokeFunction={addJokeClick} />
      </Row>
      {/* ở Jokes ta truyền data của newJoke vào để display ấy mà*/}
      <Jokes jokes={jokeList} />
    </Container>
  );
}

export default App;
