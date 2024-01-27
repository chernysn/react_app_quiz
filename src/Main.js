import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import ChangeBackground from "./changeBackground";
import NavBar from "./Navbar";

function Main() {
  return (
    <>
      <div style={{ display: "flex" }}>
        <ChangeBackground />
        <App />
      </div>
    </>
  );
}

export default Main;
