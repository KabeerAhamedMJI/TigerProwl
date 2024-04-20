function Header1() {
    return(
        <header>
        <div className="container">
          <div id="logogroup">
            <img id="logoicon" src="./images/tiger-icon.png" alt="" />
            <a id="namelogo" href="#">
              <span>TigerProwl</span>
            </a>
          </div>
          <button id="menubutton">
            <span className="material-symbols-outlined">menu_open</span>
          </button>
          <nav>
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
</header>
    )
}
export default Header1