import { Search, ShoppingCartOutlined } from "@mui/icons-material";
import { Badge } from "@mui/material";

const Navbar = () => {
    return (  
        <div className="h-[50px] py-[10px] px-[20px] flex justify-between items-center">
             <div className="flex-1 flex items-center">
                <span className="text-[16px] cursor-pointer">EN</span>
                <div className="border border-gray-200 flex items-center ml-[25px]">
                    <input type="text" className="outline-none"/>
                    <Search className="searchIcon"/>
                </div>
             </div> 
             <div className="flex-1 text-center">
                <h1 className="font-bold text-2xl">AMT.</h1>
             </div>
             <div className="flex-1">
                <div className="flex items-center justify-end">
                    <div className="navLink">REGISTER</div>
                    <div className="navLink">SIGN IN</div>
                    <div className="navLink">
                        <Badge badgeContent={4} color="primary">
                           <ShoppingCartOutlined/>
                        </Badge>
                    </div>
                </div>
             </div>
        </div>
    );
}
 
export default Navbar;