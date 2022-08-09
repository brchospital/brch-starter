import { Header } from "../header";

export function Layout({ children }) {
  return (
    <div className="App">
      <div className="header">
        <Header />
      </div>
      <div className="content">{children}</div>
      <div className="footer">
        <h1 className="text-white">footer</h1>
      </div>
    </div>
  );
}
