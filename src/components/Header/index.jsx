import React from "react";
import Rotas from "../../Rotas";

export default function Header() {
    return (
        <nav className="container">
        <div
          className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom"
        >
          <a
            href="/"
            className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none"
          >
            <span className="fs-4 text-light">Monitoria ReactJS</span>
          </a>
        <ul className="nav nav-pills">
          <Rotas />
          </ul>

        </div>
      </nav>
    )
}



