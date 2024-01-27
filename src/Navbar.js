import ReactDOM from "react-dom/client";
import { Navbar, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { Routes, Route, Router } from "react-router-dom";
import { Link } from "react-router-dom";
import Main from "./Main";

function NavBar() {
  return (
    <>
      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/"></Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Main />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default NavBar;
