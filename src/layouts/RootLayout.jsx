import { Link, Outlet } from "react-router-dom";

function RootLayout() {
  return (
    <>
      <Link to="/">Home</Link> | <Link to="/blog">Blog</Link> |
      <Link to="/about">About</Link>
      <br />
      <Outlet />
    </>
  );
}

export default RootLayout;
