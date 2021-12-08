import React, {useState} from 'react';
import { RiArrowUpFill } from "react-icons/ri";
import './ScrollArrow.css';


const ScrollArrow = () =>{

  const [showScroll, setShowScroll] = useState(false)

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400){
      setShowScroll(true)
    } else if (showScroll && window.pageYOffset <= 400){
      setShowScroll(false)
    }
  };

  const scrollTop = () =>{
    window.scrollTo({top: 0, behavior: 'smooth'});
  };

  window.addEventListener('scroll', checkScrollTop)

  return (
    <div className="scrollTotop">
        <RiArrowUpFill className="scrollTop" onClick={scrollTop} style={{height: 30, width:30, display: showScroll ? 'flex' : 'none'}}/>
    </div>
  );
}

export default ScrollArrow;