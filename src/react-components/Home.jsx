import { Link } from "react-router-dom";
// import logo from "../imgs/logo.png";

// import { Canvas } from "react-three-fiber";
import Medusa from "../imgs/medusa.png";

const Home = () => {
  return (
    <main style={{ backgroundColor: "#f2ff5b" }}>
      <section className="home">
        <div className="home__hero ">
          
            <div class="row " >
              <div class="col-lg-5 main-1">
                <h1 className="heading-primary">Design.</h1>
                <h1 className="heading-primary">Develop.</h1>
                <h1 className="heading-primary u-margin-bottom-small">
                  Dominate.
                </h1>
                <p className="main__text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Asperiores alias fugiat assumenda quisquam. Explicabo, vitae?
                </p>
              </div>

              <div className="col-lg-5 main-2">
                <img id="main" src={Medusa} alt="" />
              </div>
            </div>
          </div>
       
      </section>
      <section className="about__section" id="about__section">
        <div className="about">
          <h2 className="secondary-heading">About</h2>
          <p className="about__text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
            ducimus a quo odio voluptatibus omnis dolore modi, fuga nostrum
            nisi.
          </p>
        </div>
      </section>
      <section className="service__section__home">
        <div className="service__home ">
          <h2 className="secondary-heading u-margin-bottom-med">Services</h2>

          <div class="accordion" id="accordionExample">
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingOne">
                <button
                  class="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  Developmemt
                </button>
              </h2>
              <div
                id="collapseOne"
                class="accordion-collapse collapse show"
                aria-labelledby="headingOne"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Ipsam voluptas cumque voluptatum assumenda dicta. Culpa fugiat
                  aperiam commodi tenetur asperiores doloremque nam, provident
                  alias quo repudiandae, neque quisquam ipsa amet dolorem illum
                  hic rem consectetur impedit cum temporibus? Et, amet!
                  <Link to={"/work"} className="button-1" target={true}>
                    Check Out Our Work Here &rarr;
                  </Link>
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingTwo">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  Digital Marketing
                </button>
              </h2>
              <div
                id="collapseTwo"
                class="accordion-collapse collapse"
                aria-labelledby="headingTwo"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Ipsam voluptas cumque voluptatum assumenda dicta. Culpa fugiat
                  aperiam commodi tenetur asperiores doloremque nam, provident
                  alias quo repudiandae, neque quisquam ipsa amet dolorem illum
                  hic rem consectetur impedit cum temporibus? Et, amet!
                  <Link to={"/work"} className="button-1" target={true}>
                    Check Out Our Work Here &rarr;
                  </Link>
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingThree">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  3D Modelling
                </button>
              </h2>
              <div
                id="collapseThree"
                class="accordion-collapse collapse"
                aria-labelledby="headingThree"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Ipsam voluptas cumque voluptatum assumenda dicta. Culpa fugiat
                  aperiam commodi tenetur asperiores doloremque nam, provident
                  alias quo repudiandae, neque quisquam ipsa amet dolorem illum
                  hic rem consectetur impedit cum temporibus? Et, amet!
                  <Link to={"/work"} className="button-1" target={true}>
                    Check Out Our Work Here &rarr;
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="testimonial__section">
        <div className="testimonials">
          <h2 className="secondary-heading u-margin-bottom-med">
            Client Testimonials
          </h2>

          <div className="testimonial__box disable-scrollbars">
            <div className="item">
              <h3 className="heading-tertiary">Raj Kumar</h3>
              <p className="testimonial__text-1 u-margin-bottom-small">
                Lorem ipsum dolor sit amet.
              </p>
              <p className="testimonial__text-2 u-margin-bottom-small">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni
                earum quo possimus est dolorem? Aut corporis minima eveniet
                ducimus quod.
              </p>
              <Link to={"/work"} target={true} className="button-1">
                Check Out The Project
              </Link>
            </div>
            <div className="item">
              <h3 className="heading-tertiary">Raj Kumar</h3>
              <p className="testimonial__text-1 u-margin-bottom-small">
                Lorem ipsum dolor sit amet.
              </p>
              <p className="testimonial__text-2 u-margin-bottom-small">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni
                earum quo possimus est dolorem? Aut corporis minima eveniet
                ducimus quod.
              </p>
              <Link to={"/work"} target={true} className="button-1">
                Check Out The Project
              </Link>
            </div>
            <div className="item">
              <h3 className="heading-tertiary">Raj Kumar</h3>
              <p className="testimonial__text-1 u-margin-bottom-small">
                Lorem ipsum dolor sit amet.
              </p>
              <p className="testimonial__text-2 u-margin-bottom-small">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni
                earum quo possimus est dolorem? Aut corporis minima eveniet
                ducimus quod.
              </p>
              <Link to={"/work"} target={true} className="button-1">
                Check Out The Project
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
