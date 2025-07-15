import { useContext } from "react";
import "./styles.css";
import { ContextListCount } from "../../utils/context-list";

export default function Header() {

  const {contextListCount} = useContext(ContextListCount);

  return (
    <header>
      <nav className="container navbar">
        <h1>DSFilter</h1>
        <div className="navbar-right">
          {
            contextListCount > 0 &&
            <div className="list-count">{contextListCount}</div>
          }
          produto(s)
        </div>
      </nav>
    </header>
  );
}
