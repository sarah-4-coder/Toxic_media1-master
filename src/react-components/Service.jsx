// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import Model1 from "./Model3";
// import Model2 from "./Model3";
// import Model3 from "./Model3";

// const Service = () => {
//   const [selectedButton, setSelectedButton] = useState(null);

//   const handleclick = (buttonId) => {
//     setSelectedButton(buttonId);
//   };

//   const service_detail = [
//     {
//       id: 1,
//       service_text_1: `Lorem ipsum dolor sit, amet consectetur adipisicing elit.
//         Libero, nulla amet. Tenetur maxime deleniti suscipit unde iure
//         totam quaerat voluptate accusantium velit aperiam, eveniet
//         assumenda beatae vero at architecto modi voluptas? Eum quam
//         dolorum aspernatur nobis ad recusandae sequi facere!`,
//     },
//     {
//       id: 2,
//       service_text_2: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
//         repellendus quos doloremque ullam voluptas laborum nihil
//         pariatur exercitationem delectus, et reprehenderit nam,
//         obcaecati ipsa, veritatis dicta placeat accusamus dignissimos
//         nobis. Quae ex ratione iusto non natus omnis, sunt
//         necessitatibus possimus.`,
//     },
//     {
//       id: 3,
//       service_text_3: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
//         repellendus quos doloremque ullam voluptas laborum nihil
//         pariatur exercitationem delectus, et reprehenderit nam,
//         .`,
//     },
//   ];

//   const Content = (prop) => {
//     return (
//       <div className="container">
//         <div className="row">
//           <div className="col">
//             <div className="content__detail">
//               <p className="content__text u-margin-bottom-small">{prop.text}</p>
//               <Link to={"/contact"} target={true} className="a ">
//                 Work With us
//               </Link>

//               <Link to={"/work"} target={true} className="a-1">
//                 Check Out our Work here &rarr;
//               </Link>
//             </div>
//           </div>
//           <div className="col">
//             <div className="content__image">
//               {prop.model}
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   };

//   return (
//     <section className="service__page u-margin-top-small">
//       <div className="service">
//         <h2 className="secondary-heading u-margin-bottom-med">Our services</h2>
//         <div className="service__button u-margin-bottom-big">
//           <a
//             className={
//               selectedButton === 1 ||
//               (selectedButton !== 1 &&
//                 selectedButton !== 2 &&
//                 selectedButton !== 3)
//                 ? "active a"
//                 : "a"
//             }
//             onClick={() => handleclick(1)}
//           >
//             Digital Marketing
//           </a>
//           <a
//             className={selectedButton === 2 ? "active a" : "a"}
//             onClick={() => handleclick(2)}
//           >
//             Development
//           </a>
//           <a
//             className={selectedButton === 3 ? "active a" : "a"}
//             onClick={() => handleclick(3)}
//           >
//             3D Modelling
//           </a>
//         </div>
//         <div className="service__content">
//           {selectedButton === 1 ||
//           (selectedButton !== 1 &&
//             selectedButton !== 2 &&
//             selectedButton !== 3) ? (
//             <>
//               <Content
//                 text={service_detail[0].service_text_1}
//                 model={<Model1 />}
//               />
//             </>
//           ) : null}

//           {selectedButton === 2 ? (
//             <Content
//               text={service_detail[1].service_text_2}
//               model={<Model2 />}
//             />
//           ) : null}
//           {selectedButton === 3 ? (
//             <Content
//               text={service_detail[2].service_text_3}
//               model={<Model3 />}
//             />
//           ) : null}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Service;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Canvas } from "react-three-fiber";
import Model1 from "./Model3";
import Model2 from "./Model3";
import Model3 from "./ModelAd";

const Service = () => {
  const [selectedButton, setSelectedButton] = useState(null);

  const handleclick = (buttonId) => {
    setSelectedButton(buttonId);
  };

  const service_detail = [
    {
      id: 1,
      service_text_1: `Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        Libero, nulla amet. Tenetur maxime deleniti suscipit unde iure
        totam quaerat voluptate accusantium velit aperiam, eveniet
        assumenda beatae vero at architecto modi voluptas? Eum quam
        dolorum aspernatur nobis ad recusandae sequi facere!`,
    },
    {
      id: 2,
      service_text_2: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
        repellendus quos doloremque ullam voluptas laborum nihil
        pariatur exercitationem delectus, et reprehenderit nam,
        obcaecati ipsa, veritatis dicta placeat accusamus dignissimos
        nobis. Quae ex ratione iusto non natus omnis, sunt
        necessitatibus possimus.`,
    },
    {
      id: 3,
      service_text_3: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
        repellendus quos doloremque ullam voluptas laborum nihil
        pariatur exercitationem delectus, et reprehenderit nam,
        .`,
    },
  ];

  const Content = (prop) => {
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="content__detail u-margin-bottom-med u-margin-top-small">
              <p className="content__text u-margin-bottom-small">{prop.text}</p>
              <Link to={"/contact"} target={true} className="button">
                Work With us
              </Link>

              <Link to={"/work"} target={true} className="button-1">
                Check Out our Work here &rarr;
              </Link>
            </div>
          </div>
          <div className="col">
            <div className="content__image">
              <Canvas
                style={{ position: "relative", width: "100%", height: "100%" }} // Adjust the style of the Canvas
                camera={{ position: [0, 0, 50] }} // Adjust the camera position
              >
                {prop.model}
              </Canvas>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className="service__page u-margin-top-small">
      <div className="service">
        <h2 className="secondary-heading u-margin-bottom-med">Our services</h2>
        <div className="service__button u-margin-bottom-big">
          <a
            href="#dm"
            className={
              selectedButton === 1 ||
              (selectedButton !== 1 &&
                selectedButton !== 2 &&
                selectedButton !== 3)
                ? "active button"
                : "button"
            }
            onClick={() => handleclick(1)}
          >
            Digital Marketing
          </a>
          <a
            href="#d"
            className={selectedButton === 2 ? "active button" : "button"}
            onClick={() => handleclick(2)}
          >
            Development
          </a>
          <a
            href="#3d"
            className={selectedButton === 3 ? "active button" : "button"}
            onClick={() => handleclick(3)}
          >
            3D Modelling
          </a>
        </div>
        <div className="service__content h-">
          {selectedButton === 1 ||
          (selectedButton !== 1 &&
            selectedButton !== 2 &&
            selectedButton !== 3) ? (
            <>
              <Content
                text={service_detail[0].service_text_1}
                model={<Model1 />}
              />
            </>
          ) : null}

          {selectedButton === 2 ? (
            <Content
              text={service_detail[1].service_text_2}
              model={<Model2 />}
            />
          ) : null}
          {selectedButton === 3 ? (
            <Content
              text={service_detail[2].service_text_3}
              model={<Model3 />}
            />
          ) : null}
        </div>
      </div>
    </section>
  );
};

export default Service;
