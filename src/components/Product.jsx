import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from "@mui/icons-material";

const Product = ({item}) => {
    return ( 
        <div className="group flex-1 m-[5px] min-w-[280px] h-[350px] flex items-center justify-center bg-[#f5fbfd] relative">
            <img src={item.img} className="h-[75%] z-[2]" alt="Product Image" />
            <div className="opacity-0 w-full h-full absolute top-0 left-0 bg-black bg-opacity-20 z-[3] flex items-center justify-center group-hover:opacity-100 transition-all">
            {/* Info Container */}
            <div className="productIcon">
                {/* Icon Container */}
                <ShoppingCartOutlined />
            </div>
            <div className="productIcon">
                {/* Icon Container */}
                <SearchOutlined />
            </div>
            <div className="productIcon">
                {/* Icon Container */}
                <FavoriteBorderOutlined />
            </div>
        </div>
       </div>
     );
}
 
export default Product;