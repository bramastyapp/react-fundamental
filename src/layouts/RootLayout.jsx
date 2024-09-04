import { NavLink, Outlet } from "react-router-dom";
import "../styles/index.css";

function RootLayout() {
  return (
    <>
      <NavLink
        to="/"
        className={({ isActive, isPending }) =>
          isActive ? "active" : isPending ? "pending" : ""
        }
        style={{
          marginLeft: "5px",
          marginRight: "5px",
        }}
      >
        Home
      </NavLink>
      |
      <NavLink
        to="/blog"
        className={({ isActive, isPending }) =>
          isActive ? "active" : isPending ? "pending" : ""
        }
        style={{
          marginLeft: "5px",
          marginRight: "5px",
        }}
      >
        Blog
      </NavLink>
      |
      <NavLink
        to="/about"
        className={({ isActive, isPending }) =>
          isActive ? "active" : isPending ? "pending" : ""
        }
        style={{
          marginLeft: "5px",
          marginRight: "5px",
        }}
      >
        About
      </NavLink>
      <br />
      <Outlet />
    </>
  );
}

export default RootLayout;
