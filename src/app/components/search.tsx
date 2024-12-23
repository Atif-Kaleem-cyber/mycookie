"use client";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import React from "react";
import { useDebouncedCallback } from "use-debounce";

const Search = () => {

  const searchParam = useSearchParams();
  const pathName = usePathname();
  const {replace} = useRouter();

  const handleSearch = useDebouncedCallback((term:string) => {

    const params = new URLSearchParams(searchParam)
    if(term){
params.set("query", term)
    }
    else{
      params.delete("query")
    }
    replace(`${pathName}?${params.toString()}`)
  }, 300)

  return (
    <div className="md:w-2/5">
      {" "}
      <div className="form-control">
        <input
          onChange={(e) => handleSearch(e.target.value)}
          type="text"
          placeholder="Search"
          className="input input-bordered w-24 md:w-auto"
        />
      </div>
    </div>
  );
};

export default Search;
