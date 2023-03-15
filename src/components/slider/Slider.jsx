import './slider.scss'
import {MdArrowBackIos, MdArrowForwardIos} from 'react-icons/md'
import { useState } from 'react';

const Slider = () => {
    const [currentSlide , setCurrentSlide] = useState(0);
    console.log(currentSlide)
    const data = [
        "https://images.pexels.com/photos/840916/pexels-photo-840916.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/839011/pexels-photo-839011.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/1036627/pexels-photo-1036627.jpeg?auto=compress&cs=tinysrgb&w=600",
      ];

      const prevSlide = () => {
        setCurrentSlide(currentSlide === 0 ? 2 : (prev) => prev - 1)
    }
    const nextSlide = () => {
        setCurrentSlide(currentSlide === 2 ? 0 : (prev) => prev + 1)
      };
    
      // setTimeout(() => {
      //   setCurrentSlide(currentSlide === 2 ? 0 : (prev) => prev + 1)
      // }, 4000)

  return (
    <div className="slider">
        <div className="container" style={{transform: `translateX(-${currentSlide * 100}vw)`}}>
            <img src={data[0]} alt="" />
            <img src={data[1]} alt="" />
            <img src={data[2]} alt="" />
        </div>
        <div className="title">
          <h1>Your style's in our hands..</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, repellendus, consectetur maxime dolorum, doloremque ut quae amet praesentium numquam quia tenetur distinctio commodi voluptates facere. Repudiandae distinctio magnam laboriosam modi.</p>
        </div>
        <div className="icons">
            <div onClick={prevSlide} className="icon"><MdArrowBackIos/></div>
            <div onClick={nextSlide} className="icon"><MdArrowForwardIos/></div>
        </div>
    </div>
  )
}

export default Slider