import { Link } from "react-router-dom";
// import logo from "../imgs/logo.png";

// import { Canvas } from "react-three-fiber";
import Medusa from "../imgs/medusa.png";

const Home = () => {
  return (
    <main style={{ backgroundColor: "#f2ff5b" }}>
      <section className="home">
        <div className="home__hero ">
          <div class="row ">
            <div class="col-lg-5 main-1">
              <div className="submain">
                <h1 className="heading-primary">Design.</h1>
                <h1 className="heading-primary">Develop.</h1>
                <h1 className="heading-primary u-margin-bottom-small">
                  Dominate.
                </h1>
                <p className="main__text">
                  Your path to success starts here. We excel in designing
                  visually stunning and user-friendly experiences that captivate
                  your audience. Experience the power of design, development,
                  and domination with our exceptional services.
                </p>
              </div>
            </div>

            <div className="col-lg-5 main-2">
              <img id="main" src={Medusa} alt="" />
            </div>
          </div>
        </div>
      </section>
      <section className="about__section" id="about__section">
        <div className="about">
          <div className="about__content">
            <h2 className="secondary-heading">About</h2>
            <p className="about__text">
              We are a dynamic and rapidly growing agency based in India that
              offers a range of services such as development, 3D modeling, and
              digital marketing. We pride ourselves on our expertise in these
              areas and our commitment to delivering high-quality solutions to
              our clients.
            </p>
          </div>
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
                  Our skilled development team specializes in creating
                  cutting-edge solutions tailored to your specific needs. With
                  expertise in various programming languages and frameworks, we
                  build robust web and mobile applications that elevate your
                  business to new heights. From front-end interfaces to back-end
                  systems, we ensure seamless functionality and an exceptional
                  user experience.
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
                  In today's digital landscape, effective marketing is key to
                  reaching your target audience and driving business growth. Our
                  digital marketing experts employ data-driven strategies to
                  enhance your online presence, increase brand visibility, and
                  drive qualified traffic to your website. From search engine
                  optimization (SEO) to social media marketing and content
                  creation, we ensure that your brand shines in the digital
                  domain.
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
                  Unlock a world of imagination and creativity with our 3D
                  modeling services. Our talented artists and designers bring
                  ideas to life by crafting realistic and captivating 3D models.
                  Whether architectural visualization, product design, or
                  character modeling, we use advanced tools and techniques to
                  deliver stunning visuals that leave a lasting impression on
                  your audience.
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
