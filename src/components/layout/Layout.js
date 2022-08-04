import { Link } from "react-router-dom";

export function Layout({ children }) {
  return (
    <div className="App">
      <div className="header">
        <ul>
            <li><Link to="/">home</Link></li>
            <li><Link to="/about">About</Link></li>
        </ul>
      </div>
      <div className="content">{children}</div>
      <div className="footer">
        <h1>footer</h1>
      </div>
    </div>
  );
}
