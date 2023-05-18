import { Link, NavLink } from "react-router-dom"

const Header = () => {
  return (
      <header>
        <div className="container">
          <div className="d-flex justify-content-between align-items-center"></div>
            <div className="logo">
              <Link to = "/" className="brand">WSP</Link>
            </div>
        </div>
      </header>
  )
}

export default Header
