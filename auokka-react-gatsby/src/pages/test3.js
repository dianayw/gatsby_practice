// import * as styles from "./test3.css";
// import * as React from "react";
// import bannerImage1 from"../images/banner_image_1.png";
// import bannerImage2 from"../images/banner_image_2.png";
// import bannerImage3 from"../images/banner_image_3.png";

// const images = [bannerImage1, bannerImage2, bannerImage3];
// const delay = 3000;

// const Slideshow = () => {
//   const [index, setIndex] = React.useState(0);
//   const timeoutRef = React.useRef(null);
//   React.useEffect(() => {
//     clearTimeout(timeoutRef.current);
//     timeoutRef.current = setTimeout(
//       () =>
//         setIndex((prevIndex) =>
//           prevIndex === images.length - 1 ? 0 : prevIndex + 1
//         ),
//       delay
//     );
//     return () => {
//       clearTimeout(timeoutRef.current);
//     };
//   }, [index]);

//   return (
//     <div className="slideshow">
//       <div className="slideshowSlider"
//         style={{ transform: `translate(${-index * 100}%, 0)` }}
//       >
//         {images.map((imageLink, index) => (
//           <img
//             className="slide"
//             key={index}
//             src ={imageLink}
//           ></img>
//         ))}
//       </div>

//       <div className="slideshowBars">
//         {images.map((_, idx) => (
//           <div
//             key={idx}
//             className={`slideshowBar${index === idx ? " active" : ""}`}
//             onClick={() => {setIndex(idx);}}
//           ></div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Slideshow;
