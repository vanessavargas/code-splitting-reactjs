import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

export default function Header() {
    return (
      <nav class="navbar navbar-expand-lg bg-light">
      <div class="container-fluid">
        <a class="navbar-brand">Monitoria ReactJS</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <Link class="nav-link" to="/">Home</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/sobre">Sobre</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    )
}



