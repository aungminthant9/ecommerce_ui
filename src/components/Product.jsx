import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from "@mui/icons-material";

const Product = ({item}) => {
    return ( 
        <div className="flex-1 m-[5px] min-w-[280px] h-[350px] flex items-center justify-center bg-[#f5fbfd] relative">
            <div className="w-[200px] h-[200px] rounded-full bg-white absolute"> {/** circle */}

            </div>
            <img src={item.img} className="h-[75%] z-[2]"/>
            <div className="w-[100%] h-[100%] absolute top-0 left-0 bg-gray-500 z-[3] flex items-center justify-center">    {/**Info Container */}
                <div> {/**Icon Container */}
                    <ShoppingCartOutlined/>
                </div>
                <div> {/**Icon Container */}
                    <SearchOutlined/>
                </div>
                <div> {/**Icon Container */}
                    <FavoriteBorderOutlined/>
                </div>
            </div>
        </div>
     );
}
 
export default Product;