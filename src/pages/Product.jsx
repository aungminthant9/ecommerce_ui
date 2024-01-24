import { Add, Remove } from "@mui/icons-material";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";

const Product = () => {
    return ( 
        <div className="">
            <Announcement/>
            <Navbar/> 
            <div className="p-[50px] flex">
                <div className="flex-1">  {/**imgContainer */}
                    <img src="https://i.ibb.co/S6qMxwr/jean.jpg" alt="/" className="w-full h-[90vh] object-cover"/>
                </div>
                <div className="flex-1 py-0 px-[50px]"> {/**Info Container */}
                    <h1 className="font-[200] text-[25px]">Denim Jumpsuit</h1>
                    <p className="my-[20px] mx-0">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                    venenatis, dolor in finibus malesuada, lectus ipsum porta nunc, at
                    iaculis arcu nisi sed mauris. Nulla fermentum vestibulum ex, eget
                    tristique tortor pretium ut. Curabitur elit justo, consequat id
                    condimentum ac, volutpat ornare.
                    </p>
                    <span className="font-[100] text-[30px]">
                        $ 20
                    </span>
                    <div className="w-[50%] flex justify-between my-[30px]">
                        <div className="productFilter"> {/**filter */}
                            <span className="text-[20px] font-[200]">Color</span>
                            <div className="filtercolor bg-black"></div> {/**filter color */}
                            <div className="filtercolor bg-blue-700"></div> {/**filter color */}
                            <div className="filtercolor bg-gray-600"></div> {/**filter color */}
                        </div>

                        <div className="productFilter">   {/**filter */}
                        <span className="text-[20px] font-[200]">Size</span>
                        <select className="ml-[10px] p-[5px]">
                            <option>XS</option>
                            <option>S</option>
                            <option>M</option>
                            <option>L</option>
                            <option>XL</option>
                        </select>
                        </div>
                    </div> 
                    <div className="w-[50%] flex items-center justify-between">  {/**add container */}
                        <div className="flex items-center font-bold">  {/** amount container */}
                            <Remove className="cursor-pointer"/>
                            <span className="w-[30px] h-[30px] rounded-[10px] border-2 border-teal-500 flex items-center justify-center mx-[5px]">1</span>
                            <Add className="cursor-pointer"/>
                        </div>
                        <button className="p-4 border-2 border-teal-500 bg-white cursor-pointer 
                        font-semibold transition duration-300 ease-in-out hover:bg-teal-100 hover:border-teal-700">Add to Cart</button>
                    </div>
                </div>
            </div>
            <Newsletter/>
            <Footer/>
        </div>
     );
}
 
export default Product;