import "./slider.scss";
import { useState } from "react";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";
function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    "https://img.freepik.com/free-photo/portrait-young-happy-girl-holding-shopping-bags_171337-2608.jpg?w=996&t=st=1685197236~exp=1685197836~hmac=eb1bb29a49e61ab905337b3861d693a91d7726afcb10945385cfd8e78ad28ac5",
    "https://img.freepik.com/free-photo/fashion-photo-young-stylish-blonde-woman-walking-street-wearing-trendy-outfit-holding-shopping-bags-speak-by-phone_496169-2058.jpg?w=996&t=st=1685196885~exp=1685197485~hmac=74ea50b2e43631fce6014b5a611a82f94ed7c29ec1869c68f97e7ed5f9dcb724",
    "https://img.freepik.com/free-photo/full-length-portrait-happy-excited-girl-bright-colorful-clothes-holding-shopping-bags-while-standing-showing-peace-gesture-isolated_231208-5946.jpg?w=996&t=st=1685197077~exp=1685197677~hmac=08bcedae2f4ad04f570e64939dbaa2ebb892ad98679e7016b1b1ec33301f9c29",
  ];

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? 2 : (prev) => prev - 1);
  };
  const nextSlide = () => {
    setCurrentSlide(currentSlide === 2 ? 0 : (prev) => prev + 1);

  };

  return (
    <div className="slider">
      <div className="container" style={{transform:`translateX(-${currentSlide*100}vw)`}}>
        <img src={data[0]} alt="slider1" />
        <img src={data[1]} alt="slider2" />
        <img src={data[2]} alt="slider3" />
      </div>

      <div className="icons">
        <div className="icon" onClick={prevSlide}>
          <ArrowBackOutlinedIcon />
        </div>
        <div className="icon" onClick={nextSlide}>
          <ArrowForwardOutlinedIcon />
        </div>
      </div>
    </div>
  );
}

export default Slider;
