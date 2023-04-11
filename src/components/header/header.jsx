import './header.css'

function Header() {
  return   <nav>
    <div className="nav-wrapper nav-bar amber darken-3">
      <a href="#" className="brand-logo">Movies</a>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li><a href="#">Repo</a></li>
      </ul>
    </div>
  </nav>
}

export {Header}