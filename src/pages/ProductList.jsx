import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Products from "../components/Products";
import Footer from "../components/Footer";

const ProductList = () => {
    return ( 
        <div>
            <Announcement/>
            <Navbar/>
            <h1 className="font-semibold text-[25px] m-[20px]">Dresses</h1>

            <div className="flex justify-between"> {/**filter container */}

                <div className="filter"> {/**filter*/}
                    <span className="filterText">
                        Filter Products
                    </span>
                    <select className="select">
                        <option className="option" disabled selected>Color</option>
                        <option className="option">White</option>
                        <option className="option">Black</option>
                        <option className="option">Red</option>
                        <option className="option">Blue</option>
                        <option className="option">Yellow</option>
                        <option className="option">Green</option>
                    </select>
                    <select className="select">
                        <option className="option" disabled selected>Size</option>
                        <option className="option">XS</option>
                        <option className="option">S</option>
                        <option className="option">M</option>
                        <option className="option">L</option>
                        <option className="option">XL</option>
                    </select>
                </div>

                <div className="filter"> {/**filter*/}
                <span className="filterText">
                        Sort Products
                    </span>
                    <select className="select">
                        <option className="option" selected>Newest</option>
                        <option className="option">Price (asc)</option>
                        <option className="option">Price (desc)</option>
                    </select>
                </div>

            </div>
            <Products/>
            <Footer/>
        </div>
     );
}
 
export default ProductList;