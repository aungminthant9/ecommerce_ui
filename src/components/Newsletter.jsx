import { Send } from "@mui/icons-material";

const Newsletter = () => {
    return ( 
        <div className="h-[60vh] bg-[#fcf5f5] flex items-center justify-center flex-col">
            <h1 className="text-[70px] mb-[20px] font-semibold">Newsletter</h1>
            <div className="text-[24px] font-medium mb-[20px]"> {/** description */}
                 Get timely updates from favourite products.
            </div>
            <div className="w-[50%] h-[40px] bg-white flex justify-between border border-solid border-gray-300">
                <input type="email" placeholder="Your email" className="border-none w-[90%] pl-5 outline-none"/>
                <button className="w-[10%] border-l-[2px] bg-blue-400 text-white">
                    <Send/>
                </button>
            </div>
        </div>
     );
}
 
export default Newsletter;