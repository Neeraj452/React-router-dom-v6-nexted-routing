import React from "react";
import {  Outlet, useLocation } from "react-router-dom";
import ProductNavigation from "../../common/ProductNavigation";
import Breadcrumbs from "../../common/Breadscum";

function Products() {
  const location = useLocation();
  console.log(location.pathname)

  return (
    <div className="products">
    <Breadcrumbs/>
       <ProductNavigation/>
        <Outlet />
    </div>
  );
}

export default Products;
