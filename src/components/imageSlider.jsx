const ImageSlider = ({bg,title,img,desc}) => {

    const sliderClasses = `slider ${bg}`;
    

    return ( 
        <div>
             <div className={sliderClasses}> {/**Slide */}
                 
                 <div className="flex-1 h-[100%]">  {/** ImageContainer */}
                 <img src={img}
                      className="slideImage"/>
                 </div>

                 <div className="flex-1 p-[50px]"> {/** InfoContainer */}
                     <h1 className="title">{title}</h1>
                     <p className="desc">{desc}</p>
                     <button className="shop-btn">SHOP NOW</button>
                 </div>

             </div>
        </div>
     );
}
 
export default ImageSlider;