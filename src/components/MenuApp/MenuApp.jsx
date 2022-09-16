//css
import "./MenuApp.css"
//hoocks
import { useState } from "react"
import {Link, NavLink} from "react-router-dom"

//icon's
import IconMenu from "../../assets/menu.svg"
import CloseMenu from "../../assets/close.svg"

const MenuApp = () => {

  const [menu, setMenu] = useState(true)

  return (
    <>
     {/* colapse menu */}
      <div className="menu-button" onClick={()=> menu? setMenu(false) : setMenu(true)}>
        <img width={30} src={menu ? IconMenu : CloseMenu} alt="icone menu" />
      </div>
      <div>
        <Link to="/">Logo</Link>
      </div>
      <nav className={menu ? "toggle-menu": undefined}>
        <ul>
          <li><NavLink to="/">Home</NavLink></li>
        </ul>
      </nav>
    </>
  )
}

export default MenuApp