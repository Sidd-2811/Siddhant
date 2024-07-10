import "./Navbar.css"
import menu from "../../assets/menu.png"
import logo from "../../assets/logo.png"
import search from "../../assets/search.png"
import upload from "../../assets/upload.png"
import more from "../../assets/more.png"
import notification from "../../assets/notification.png"
import profile from "../../assets/jack.png"

const Navbar = ({setSidebar}) => {
  return (
    <nav className="flex-div">
      <div className="nav-left flex-div">
      <img className="menu" src={menu} onClick={()=>setSidebar(prev=>prev===false ? true : false)} alt="" />
      <img className="logo" src={logo} alt="" />
      </div>

      <div className="nav-middle flex-div">
         <div className="search-box flex-div">
          <input type="text" placeholder="search" />
          <img src={search} alt="" />
         </div>
      </div>

      <div className="nav-right flex-div">
      <img src={upload} alt="" />
      <img src={more} alt="" />
      <img src={notification} alt="" />
      <img src={profile}  className="user-icon" alt="" />
      </div>
    </nav >
  )
}

export default Navbar