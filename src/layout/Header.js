import {React} from 'react';
import {NavLink} from 'react-router-dom';

export default function Header()  {
    return (
      <header className="border-dark border-bottom border-1">
        <div className="bg-dark ">
        <div className="container py-1 ">
          <div className="row text-white">
          <div className="col-md-6"><h6>Livraison Gratuite sur Casablanca - par  Amana hors Casablanca</h6></div>
          <div className="col-md-6">Login</div>
          </div>
        </div>
        </div>
<nav className="container navbar navbar-expand-lg navbar-light bg-light ">
  <div className="container-fluid">
    <NavLink className="navbar-brand" exact to="/"><img alt="Logo" src="https://www.filtremaroc.com/wp-content/uploads/2021/02/water-54x54.png.webp"/></NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse  justify-content-end" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item me-5">
        <NavLink  className="nav-link" exact activeClassName="active" to="/">Accueil</NavLink>
        </li>
        <li className="nav-item me-5">
        <NavLink  className="nav-link"  activeClassName="active" to="/shop">Boutique</NavLink>
        </li>
        {/* <li className="nav-item me-5">
        <NavLink className="nav-link" activeClassName="active" to="/contact">Contact</NavLink>
        </li> */}
        <li className="nav-item">
        <NavLink className="nav-link" activeClassName="active" to="/contact">Contact</NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>
</header>
    )
}