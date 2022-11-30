import React from "react";
import { lazy, Suspense } from "react";

import "./style.css";
import Imagem1 from "../../assets/img/ti1.png";

//importação normal:
//import Carousel from "./Carousel";

//importação com Lazy Loading:
const Carousel = React.lazy(() => import ("./Carousel"));

export default function Home() {
    return (
      <main className="container">
        <Suspense fallback={
          <div>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos, provident voluptates? Dicta dignissimos magnam veniam debitis? Nesciunt, dolores perferendis optio quasi beatae, aut doloribus fugiat corrupti magni amet quibusdam vitae!
          </div>
        }>
          <Carousel />
        </Suspense>
        
        {/* Componente Heading */}
        <section className="heading">
          <div className="row text-center">

        {/* Componente ItemHeading */}
          <div className="col-lg-4">
            <img src={Imagem1} alt="computador" />

            <h2 className="fw-normal">Heading</h2>
            <p>
              Some representative placeholder content for the three columns of
              text below the carousel. This is the first column.
            </p>
            <p>
              <a className="btn btn-secondary" href="#">View details &raquo;</a>
            </p>
          </div>

          <div className="col-lg-4">
            <img src={Imagem1} alt="computador" />

            <h2 className="fw-normal">Heading</h2>
            <p>
              Another exciting bit of representative placeholder content. This
              time, we've moved on to the second column.
            </p>
            <p>
              <a className="btn btn-secondary" href="#">View details &raquo;</a>
            </p>
          </div>

          <div className="col-lg-4">
            <img src={Imagem1} alt="computador" />

            <h2 className="fw-normal">Heading</h2>
            <p>
              And lastly this, the third column of representative placeholder
              content.
            </p>
            <p>
              <a className="btn btn-secondary" href="#">View details &raquo;</a>
            </p>
          </div>
        </div>
      </section>

    </main>
    )
}