import { Facebook, Instagram, MailOutline, Phone, Pinterest, Room, Twitter } from "@mui/icons-material";

const Footer = () => {
    return ( 
        <div className="flex items-center">
            <div className="flex-1 flex flex-col p-[20px]"> {/**left */}
               <h1 className="font-semibold text-[25px]">
                  AMT.
               </h1>
               <p className="my-[20px] mx-0">
               There are many variations of passages of Lorem Ipsum available, but
                the majority have suffered alteration in some form, by injected
                humour, or randomised words which don't look even slightly believable.
               </p>
               <div className="flex">

                  <div className="socialIcon bg-[#3B5999]">
                    <Facebook/>
                  </div>
                  <div className="socialIcon bg-[#E4405F]">
                    <Instagram/>
                  </div>
                  <div className="socialIcon bg-[#55ACEE]">
                    <Twitter/>
                  </div>
                  <div className="socialIcon bg-[#E60023]">
                    <Pinterest/>
                  </div>

               </div>
            </div> 
            <div className="flex-1 flex flex-col p-[20px]"> {/**center */}
                <h1 className="mb-[20px] text-[20px] font-semibold">Useful Links</h1>
                <ul className="flex flex-wrap">
                    <li className="listItem">Home</li>
                    <li className="listItem">Cart</li>
                    <li className="listItem">Man Fashion</li>
                    <li className="listItem">Woman Fashion</li>
                    <li className="listItem">Accessories</li>
                    <li className="listItem">My Account</li>
                    <li className="listItem">Order Tracking</li>
                    <li className="listItem">Wishlist</li>
                    <li className="listItem">Terms</li>
                </ul>
            </div> 
            <div className="flex-1 p-[20px]">  {/**right */}
               <h1 className="mb-[20px] text-[20px] font-semibold">Contact</h1>
               <div className="contact">
                  <Room className="contactIcon"/>
                  Myo Thit Gyi ward,Myitkyina
               </div>
               <div className="contact">
                 <Phone className="contactIcon"/>
                 +959 123 456 78
               </div>
               <div className="contact">
                <MailOutline className="contactIcon"/>
                  contact@amt.dev
               </div>
               <img src="https://i.ibb.co/Qfvn4z6/payment.png" alt="payment" className="w-[50%]"/>
            </div>
        </div>
     );
}
 
export default Footer;