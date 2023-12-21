import { Link } from "react-router-dom";

function ProductNavigation(){
return(<div className="productsNav">
<nav>
<Link to="/products/search"> Search </Link>
<Link to="/products/search/list"> List </Link>
<Link to="/products/add"> Add </Link></nav>
</div>
)
}
export default ProductNavigation;