import { Helmet } from "react-helmet-async";
import "./App.css";

function App() {
  return (
    <>
      <div>
        <Helmet>
          <title>Black Screen App</title>
          <meta
            name="description"
            content="Đây là trang chủ của ứng dụng Black Screen App. Tìm hiểu thêm thông tin tại đây!"
          />
        </Helmet>
      </div>
    </>
  );
}

export default App;
