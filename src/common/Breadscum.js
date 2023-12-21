import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Breadcrumbs() {
  const location = useLocation();
  const pathSegments = location.pathname.split('/').filter(segment => segment !== '');

  // Generate breadcrumb items
  const breadcrumbs = pathSegments.map((segment, index) => {
    const path = `/${pathSegments.slice(0, index + 1).join('/')}`;
    console.log(segment)
    return (
      <span key={path}>
        <Link to={path}>{`${segment}`}</Link>
      </span>
    );
  });

  return (
    <div style={{background:"blue"}}>
        {breadcrumbs}
    </div>
  );
}

export default Breadcrumbs;
