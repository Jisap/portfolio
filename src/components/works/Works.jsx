import React, { useState } from 'react'
import "./works.scss"
import { v4 as uuidv4 } from 'uuid';

const Works = () => {

    const [ currentSlide, setCurrentSlide ] = useState( 0 ); // currentSlide representa la posición en el []

    const data = [
    {
      id: "1",
      icon: "./assets/mobile.png",
      title: "Web Design",
      desc:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
      img:
        "https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/attachment_100040756-e1538485934255.jpeg?auto=format&q=60&fit=max&w=930",
    },
    {
      id: "2",
      icon: "./assets/globe.png",
      title: "Mobile Application",
      desc:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      img:
        "https://i.pinimg.com/originals/e9/c9/2f/e9c92f7869d682a6fa5a97fb8a298f30.jpg",
    },
    {
      id: "3",
      icon: "./assets/writing.png",
      title: "Branding",
      desc:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      img:
        "https://i.pinimg.com/originals/a9/f6/94/a9f69465d972a004ad581f245d6ad581.jpg",
    },
  ];

  const handleClick = ( way ) => {                                   // cs vale inicialmente 0 -> translate(0*100)vw (partimos de left:0)
    way === "left" ?                                                 // Si se clicka en "left"...
                     setCurrentSlide( currentSlide > 0               // y cs>0, cs = cs-1 -> translate(-1*100)vw -> desplazamiento a la izda del []   
                        ? currentSlide-1 : 2)                        // sino (cs=0) valdrá 2 desplazamiento al final del [] porque estabamos al pcpio de este.
                   : setCurrentSlide( currentSlide<data.length-1     // Sino se clicka en left (right) y cs<(data.length-1) -> cs=cs+1 -> desplaz a la dcha
                        ? currentSlide+1 : 0)                        // sino (cs>data.length-1) cs=0 ->  desplazamiento al pcpio del []     
  }

    return (
        <div className="works" id="works">
            <div className="slider"
                 style={{ transform: `translateX(-${currentSlide * 100}vw)`}}>
                { 
                    data.map( d => (

                        <div className="container" key={uuidv4()}>
                            <div className="item">
                                <div className="left">
                                    <div className="leftContainer">
                                        <div className="imgContainer">
                                            <img src={ d.icon } alt="" />
                                        </div>
                                        <h2>{ d.title }</h2>
                                        <p>{ d.desc }</p>
                                        <span>Projects</span>
                                    </div>
                                </div>
                                <div className="right">
                                    <img
                                        src={d.img} alt="" />
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
            <img src="assets/next.png" 
                 className="arrow left" 
                 alt=""
                 onClick={ () => { handleClick("left")} } 
                 />
            <img src="assets/next.png"
                 className="arrow right" 
                 alt="" 
                 onClick={ () => { handleClick("right")} }
                 />
        </div>
    )
}

export default Works
