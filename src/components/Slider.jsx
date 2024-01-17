import { ArrowLeftOutlined, ArrowRightOutlined } from "@mui/icons-material";

const Slider = () => {
    return ( 
        <div className="w-[100%] h-[100vh] flex relative">
            <div className="sliderArrow left-[10px]">
                <ArrowLeftOutlined/>
            </div>
            
            <div className="h-[100%]">
                <div className="flex items-center w-[100vw] h-[100vh]"> {/**Slide */}
                 
                    <div className="flex-1 h-[100%]">  {/** ImageContainer */}
                    <img src="https://i.ibb.co/XsdmR2c/1.png" 
                         className="h-[90%] object-cover"/>
                    </div>

                    <div className="flex-1 p-[50px]"> {/** InfoContainer */}

                    </div>

                </div>
            </div>

            <div className="sliderArrow right-[10px]">
                <ArrowRightOutlined/>
            </div>
        </div>
     );
}
 
export default Slider;