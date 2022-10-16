import Image from "next/image";
import { useState } from 'react';
import {useRouter} from "next/router";
import { Search } from './../Icons';

function InputSearch() {
  
  const router = useRouter();
  const [term,setTerm] = useState(router.query.term)

  const search = () =>  {
    const {query} = router;
    query.term = term
    router.push({ pathname: "products", query: query })
  };
  
  return (
    <div className="relative shadow-m h-16">
      <input
        type="text"
        className="w-full h-full py-4 pl-4 sm:pl-14  pr-20 sm:pr-36
         border border-gray-200 
         outline-none  transition  text-p1
         hover:border-gray-400 focus:border-gray-400"
        placeholder="Input Search"
        value={term}
        onChange={(e) => setTerm(e.target.value)}
      />
      <span className="hidden sm:block absolute top-1/2  left-3 -translate-y-1/2	">
      <Image  width="34px" height="34px" src="/icons/search-normal.png" alt="search" />
      </span>

      <button onClick={search} className="btn-md sm:btn btn-primary px-5 absolute top-1/2 -translate-y-1/2 right-1" size="sm">
        <span className="hidden sm:block">find now</span>
        <span className="inline-block sm:hidden"><Search /></span>
        
      </button>
    </div>
  );
}

export default InputSearch;
