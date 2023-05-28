import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Link } from "react-router-dom";
import "./Navbar.scss"
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="left">
          <div className="item">
            <span>USD</span>
            <KeyboardArrowDownIcon />
          </div>
          <div className="item">
            <Link className="link" to={"/products/1"}>Women</Link>
          </div>
          <div className="item">
            <Link className="link" to={"/products/2"}>Men</Link>
          </div>
          <div className="item">
            <Link className="link" to={"/products/3"}>Children</Link>
          </div>
        </div>
        
        <div className="center">
          <Link className="link" to={"/"}>ZARASTORE</Link>
        </div>

        <div className="right">
          <div className="item">
            <Link className="link" to={"/"}>Homepage</Link>
          </div>
          <div className="item">
            <Link className="link" to={"/"}>About</Link>
          </div>
          <div className="item">
            <Link className="link" to={"/"}>Contact</Link>
          </div>
          <div className="item">
            <Link className="link" to={"/"}>Stores</Link>
          </div>
          <div className="icons">
            <SearchOutlinedIcon />
            <PersonOutlineOutlinedIcon />
            <FavoriteBorderOutlinedIcon />
            <div className="cartIcon">
              <ShoppingCartOutlinedIcon />
              <span>0</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
export default Navbar;