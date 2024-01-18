import { Button } from "@mui/material";

const CategoryItem = ({item}) => {
    return ( 
        <div className="flex-1 m-[3px] h-[70vh] relative">
            <img src={item.img} className="w-[100%] h-[100%] object-cover"/>
            <div className="absolute w-[100%] h-[100%] top-0 left-0 flex flex-col items-center justify-center">
                <h1 className="font-bold text-2xl text-white mb-[20px]">{item.title}</h1>
                <button className="border-black p-[10px] bg-white text-gray-400 cursor-pointer font-semibold">SHOP NOW</button>
            </div>
        </div>
     );
}
 
export default CategoryItem;