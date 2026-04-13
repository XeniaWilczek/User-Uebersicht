import "./Root.scss";
import { Outlet, Link } from "react-router-dom";
import newLogo from "../../images/newLogo.jpg";

function Root() {
  return (
    <>
      <div className="app">
        <div className="sidebar">
          <div className="sidebar__header">
            <img src={newLogo} alt="Techlogo " className="sidebar__image"></img>
          </div>
          <Link to="/" className="sidebar__button">
            Übersicht
          </Link>
          <Link to="/Create" className="sidebar__button">
            Erstellen
          </Link>
        </div>
        <div className="content-container">
          <Outlet></Outlet>
        </div>
      </div>
    </>
  );
}

export default Root;
