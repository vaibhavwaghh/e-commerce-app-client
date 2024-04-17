import "./NavBar.css";
import image from "./../../images/amazon_PNG25.png";
function NavBar() {
  return (
    <>
      <header>
        <nav>
          <div className="left">
            <div className="navlogo">
              <img src={image} alt="" />
            </div>
            <div className="nav_Searchbar">
              <input type="text" />
              <div className="search_icon"></div>
            </div>
          </div>
          <div className="right"></div>
        </nav>
      </header>
    </>
  );
}

export default NavBar;
