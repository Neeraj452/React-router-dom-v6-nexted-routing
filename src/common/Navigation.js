import { Link, Outlet } from "react-router-dom"

function Navaigation (){
return<div>
<nav>
        <Link to="/"> Home </Link>
        <Link to="/login"> Login </Link>
        <Link to="/products/search"> Products </Link>
      </nav>
      <Outlet/>
</div>
}
export default Navaigation