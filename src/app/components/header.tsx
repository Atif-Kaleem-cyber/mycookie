import React, { Suspense } from "react";
import Search from "@/app/components/search";
import Loading2 from "@/app/components/loading2";

const Header = () => {
  return (
    <div>
      <div className="navbar bg-neutral shadow-lg">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">daisyUI</a>
          <Suspense fallback={<Loading2/>}>
          <Search />
          </Suspense>
          
        </div>
        <div className="flex-none gap-2"></div>
      </div>
    </div>
  );
};

export default Header;
