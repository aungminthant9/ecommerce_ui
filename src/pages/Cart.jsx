import { Add, Remove } from "@mui/icons-material";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Cart = () => {
    return ( 
        <div className="">
            <Announcement/>
            <Navbar/>
             <div className="p-[20px]"> {/**wrapper */}
                <h1 className="font-light text-[28px] text-center">YOUR BAG</h1>

                <div className="flex items-center justify-between p-[20px]"> {/**top */}
                   <button className="topButton border-black border-[2px]">CONTINUE SHOPPING</button>

                   <div className="">
                    <span className="topText">Shopping Bag(2)</span>
                    <span className="topText">Your Wishlist (0)</span>
                   </div>

                   <button className="topButton bg-black text-white">CHECK OUT NOW</button>
                </div>

                <div className="flex justify-between items-center"> {/**bottom */}
                   <div className="flex-[3]"> {/**info */}
                        <div className="flex justify-between items-center"> {/**product */}
                            <div className="flex-[2] flex"> {/**product detail */}
                                <img src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A" 
                                alt="" className="w-[200px]"/>
                                <div className="flex flex-col p-[20px] justify-around"> {/**details */}
                                   <span><b>Product:</b>JESSIE THUNDER SHOES</span>
                                   <span><b>ID:</b>9980-302</span>
                                   <div className="productColor bg-black">
                                        
                                    </div>
                                   <span><b>Size:</b>37.5</span>
                                </div>
                            </div>

                            <div className="flex-1 flex flex-col items-center justify-center"> {/**price detail */}
                                <div className="flex items-center mb-[20px]"> {/**product amount container */}
                                    <Add/>
                                    <div className="text-[24px] m-[5px]"> 
                                       2
                                    </div>
                                    <Remove/>
                                </div>
                                <div className="text-[30px] font-extralight"> {/**product price */}
                                   $200
                                </div>
                            </div>
                        </div>

                        <hr className="bg-[#eee] h-[1px]"/>

                        <div className="flex justify-between items-center"> {/**product */}
                            <div className="flex-[2] flex"> {/**product detail */}
                                <img src="https://i.pinimg.com/originals/2d/af/f8/2daff8e0823e51dd752704a47d5b795c.png" 
                                alt="" className="w-[200px]"/>
                                <div className="flex flex-col p-[20px] justify-around"> {/**details */}
                                   <span><b>Product:</b>HAKURA T-SHIRT</span>
                                   <span><b>ID:</b>5980-302</span>
                                   <div className="productColor bg-gray-400">
                                        
                                    </div>
                                   <span><b>Size:</b>XL</span>
                                </div>
                            </div>

                            <div className="flex-1 flex flex-col items-center justify-center"> {/**price detail */}
                                <div className="flex items-center mb-[20px]"> {/**product amount container */}
                                    <Add/>
                                    <div className="text-[24px] m-[5px]"> 
                                       1
                                    </div>
                                    <Remove/>
                                </div>
                                <div className="text-[30px] font-extralight"> {/**product price */}
                                   $100
                                </div>
                            </div>
                        </div>

                   </div>

                   <div className="flex-1 border border-gray-300 rounded-[10px] p-[20px] h-[55vh]"> {/**summary */}    
                      <h1 className="font-extralight text-[28px]">ORDER SUMMARY</h1>
                       <div className="summaryItem"> 
                          <span>Subtotal</span>
                          <span>$ 80</span>
                       </div>

                       <div className="summaryItem"> 
                          <span>Estimated Shipping</span>
                          <span>$ 5.90</span>
                       </div>

                       <div className="summaryItem"> 
                          <span>Shipping Discount</span>
                          <span>$ -5.90</span>
                       </div>

                       <div className="summaryItem font-medium text-[24px]"> 
                          <span>Total</span>
                          <span>$ 80</span>
                       </div>
                       <button className="w-full p-[10px] bg-black text-white font-semibold">CHECKOUT NOW</button>
                   </div> 
                </div>
             </div>
            <Footer/>
        </div>
     );
}
 
export default Cart;