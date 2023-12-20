

function NavBar() {
  return (
    <>
    <nav className="navbar navbar-expand-lg">
  <div className="container-fluid">
    <a className="navbar-brand" href="#"><img src="/images/logo.svg" alt="" height={"35px"} /></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
          <a className="nav-link ms-3" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link ms-3" href="#">New</a>
        </li>
        <li className="nav-item">
          <a className="nav-link ms-3" href="#">Popular</a>
        </li>
        <li className="nav-item">
          <a className="nav-link ms-3" href="#">Trending</a>
        </li>
        <li className="nav-item">
          <a className="nav-link ms-3" href="#">Categories</a>
        </li>

      </ul>
    </div>
  </div>
</nav>
    </>
  )
}

export default NavBar