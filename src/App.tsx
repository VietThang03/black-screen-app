/* eslint-disable @typescript-eslint/no-explicit-any */
import { Helmet } from "react-helmet-async";
import "./App.css";

const App = () => {
  const handleDoubleClick = async () => {
    try {
      if (!document.fullscreenElement) {
        // Kích hoạt chế độ full màn hình toàn bộ cửa sổ
        if (document.documentElement.requestFullscreen) {
          await document.documentElement.requestFullscreen();
        } else if ((document.documentElement as any).webkitRequestFullscreen) {
          await (document.documentElement as any).webkitRequestFullscreen();
        } else if ((document.documentElement as any).msRequestFullscreen) {
          await (document.documentElement as any).msRequestFullscreen();
        }
      } else {
        // Thoát khỏi chế độ full màn hình
        if (document.exitFullscreen) {
          await document.exitFullscreen();
        } else if ((document as any).webkitExitFullscreen) {
          await (document as any).webkitExitFullscreen();
        } else if ((document as any).msExitFullscreen) {
          await (document as any).msExitFullscreen();
        }
      }
    } catch (error) {
      console.error("Lỗi khi chuyển đổi chế độ toàn màn hình:", error);
    }
  };

  return (
    <>
      <div
        style={{
          width: "100%",
          height: "100vh",
          backgroundColor:"black"
        }}
        onDoubleClick={handleDoubleClick}
      >
        <Helmet>
          <title>Black Screen App</title>
          <meta
            name="description"
            content="Đây là trang chủ của ứng dụng Black Screen App. Tìm hiểu thêm thông tin tại đây!"
          />
           <link rel="canonical" href="https://blackscreen.love/" />
        </Helmet>
        {/* <button
          style={{ backgroundColor: "black" }}
          onDoubleClick={handleDoubleClick}
        ></button> */}
      </div>
    </>
  );
};

export default App;
