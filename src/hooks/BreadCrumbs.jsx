import React from "react";
import { Link, useLocation } from "react-router-dom";

const BreadCrumbs = () => {
  const { pathname } = useLocation();
  const arr = pathname.split("/").filter((i) => i);
  let path = "";
  return (
    <div className="flex items-center gap-1">
      <Link to={"/"}>Home</Link>
      <div>
        {arr.map((i, index) => {
          path += `/${i}`;
          const isLast = arr.length - 1 === index;
          return isLast ? (
            <span>{"/" + i}</span>
          ) : (
            <Link to={path}>{"/" + i}</Link>
          );
        })}
      </div>
    </div>
  );
};

export default BreadCrumbs;
