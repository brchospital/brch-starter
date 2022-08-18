import { Header } from "../header";
import { Footer } from "../footer";

export function Layout({ children }) {
  return (
    <div className="App">
      <div className="header">
        <Header />
      </div>
      <div className="content">{children}</div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}
