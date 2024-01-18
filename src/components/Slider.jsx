import { ArrowLeftOutlined, ArrowRightOutlined} from "@mui/icons-material";
import { useState } from "react";
import ImageSlider from "./imageSlider";
import { sliderItems } from "../data";

const Slider = () => {

    const [slideIndex,setSlideIndex] = useState(0);

    const clickHandler = (direction)=>{
       if (direction === 'left'){
        setSlideIndex(slideIndex > 0 ? slideIndex-1 : 2)
        // console.log(slideIndex);
       }else{
        setSlideIndex(slideIndex < 2 ? slideIndex+1 : 0)
       }
    }

    return ( 
        <div className="w-[100%] h-[100vh] flex relative overflow-hidden">
            <div className="sliderArrow left-[10px]">
                <ArrowLeftOutlined onClick={()=>{clickHandler('left')}}/>
            </div>
            
            <div style={{ display: 'flex',height: '100%', transform: `translateX(${slideIndex * -100}vw)`, transition: 'all 1s ease-in-out' }}>
                {sliderItems.map((item)=>(
                    <ImageSlider key={item.id} bg={item.bg} desc={item.desc} img={item.img} title={item.title}/>
                ))}
            </div>

            <div className="sliderArrow right-[10px]">``
                <ArrowRightOutlined onClick={()=>{clickHandler('right')}}/>
            </div>
        </div>
     );
}
 
export default Slider;