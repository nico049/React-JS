import React from 'react'
import Cartwidget from '../CartWidget'
const nav = () => {
  return (
  <nav className="navbar navbar-expand-lg bg-light">
    <div className="container-fluid">
      <a className="navbar-brand" href="#"></a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">HOMBRES</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">MUJERES</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">NIÑOS</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">ACCESORIOS</a>
          </li>
        </ul>
      </div>
      <Cartwidget/>
    </div>
</nav>
  )
}

export default nav