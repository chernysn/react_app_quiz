import "./Navbar.css";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <>
      <div className="navigation">
        <ul>
          <Link to="/" style={{ textDecoration: "none" }}>
            <li>
              Art Quiz{" "}
              <img
                src="https://img.icons8.com/ios-glyphs/30/ffffff/long-arrow-right.png"
                alt="long-arrow-right"
              />
            </li>
          </Link>

          <Link to="/about" style={{ textDecoration: "none" }}>
            <li>
              About{" "}
              <img
                src="https://img.icons8.com/ios-glyphs/30/ffffff/long-arrow-right.png"
                alt="long-arrow-right"
              />
            </li>
          </Link>
        </ul>
      </div>
    </>
  );
}

export default Navigation;
