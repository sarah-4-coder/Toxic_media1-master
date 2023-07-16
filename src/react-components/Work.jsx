import { useState } from "react";
import logo from "../imgs/logo.png";
const Work = () => {
  const [selectedButton, setSelectedButton] = useState(null);

  const handleclick = (buttonId) => {
    setSelectedButton(buttonId);
  };

  const Work_detail = [
    {
      id: 1,
      work_text_1: `Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        Libero, nulla amet. Tenetur maxime deleniti suscipit unde iure
        totam quaerat voluptate accusantium velit aperiam, eveniet
        assumenda beatae vero at architecto modi voluptas? Eum quam
        dolorum aspernatur nobis ad recusandae sequi facere!`,
      work_imgsrc_1: logo,
    },
    {
      id: 2,
      work_text_2: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
        repellendus quos doloremque ullam voluptas laborum nihil
        pariatur exercitationem delectus, et reprehenderit nam,
        obcaecati ipsa, veritatis dicta placeat accusamus dignissimos
        nobis. Quae ex ratione iusto non natus omnis, sunt
        necessitatibus possimus.`,
      work_imgsrc_2: logo,
    },
    {
      id: 3,
      work_text_3: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
        repellendus quos doloremque ullam voluptas laborum nihil
        pariatur exercitationem delectus, et reprehenderit nam,
        .`,
      work_imgsrc_3: logo,
    },
  ];

  const Content = (prop) => {
    return (
      <div className="container u-margin-bottom-huge-work">
        <div className="row">
          <div className="col">
            <div className="Wcontent__image">
              <img src={prop.src} alt="d" style={{ width: "40rem" }} />
            </div>
          </div>
          <div className="col">
            <div className="Wcontent__detail">
              <p className="Wcontent__text u-margin-bottom-small">
                {prop.text}
              </p>
              <a href="#j" className="button ">
                Project Details
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className="work__section  u-margin-top-small">
      
        <h2 className="secondary-heading u-margin-bottom-big">Our Work</h2>
        <div className="work__button">
          <a
            href="#e"
            className={
              selectedButton === 1 ||
              (selectedButton !== 1 &&
                selectedButton !== 2 &&
                selectedButton !== 3)
                ? "active button"
                : "button"
            }
            onClick={() => {
              handleclick(1);
            }}
          >
            Digital Marketing
          </a>
          <a
            href="#e"
            className={selectedButton === 2 ? "active button" : "button"}
            onClick={() => handleclick(2)}
          >
            development
          </a>
          <a
            href="#e"
            className={selectedButton === 3 ? "active button" : "button"}
            onClick={() => handleclick(3)}
          >
            3D Modelling
          </a>
        </div>
        <div className="work__contentbox">
          {selectedButton !== 1 &&
            selectedButton !== 2 &&
            selectedButton !== 3 && (
              <div className="work__content">
                <Content
                  text={Work_detail[0].work_text_1}
                  src={Work_detail[0].work_imgsrc_1}
                />
                <Content
                  text={Work_detail[0].work_text_1}
                  src={Work_detail[0].work_imgsrc_1}
                />
              </div>
            )}

          {selectedButton === 1 ? (
            <div className="work__content">
              <Content
                text={Work_detail[0].work_text_1}
                src={Work_detail[0].work_imgsrc_1}
              />
              <Content
                text={Work_detail[0].work_text_1}
                src={Work_detail[0].work_imgsrc_1}
              />
            </div>
          ) : null}
          {selectedButton === 2 ? (
            <div className="work__content">
              <Content
                text={Work_detail[1].work_text_2}
                src={Work_detail[1].work_imgsrc_2}
              />
              <Content
                text={Work_detail[1].work_text_2}
                src={Work_detail[1].work_imgsrc_2}
              />
            </div>
          ) : null}
          {selectedButton === 3 ? (
            <div clasName="work__content">
              <Content
                text={Work_detail[2].work_text_3}
                src={Work_detail[2].work_imgsrc_3}
              />
              <Content
                text={Work_detail[2].work_text_3}
                src={Work_detail[2].work_imgsrc_3}
              />
            </div>
          ) : null}
        </div>
      
    </section>
  );
};

export default Work;
