import { useState } from "react";
import { Navbar } from "../components/Navbar";
import { Copy, LocateIcon, Search } from "lucide-react";
import { SearchResultCard } from "../components/SearchResult";
import {SearchQueryFun} from "../services/api.ts"

type SearchType = "pincode" | "area";
type searchResult = {
  area: string;
  pincode: string;
};
export function Home() {
  const [searchType, setSearchType] = useState<SearchType>("pincode");
  const [placeholder, setPlaceHolder] = useState("e.g. 560038");
  const [searchResult, setSearchResult] = useState<searchResult[]>([]);
  const [error,setError]=useState<String|null>(null)
  const [searchQuery,setSearchQuery]=useState("");
  const handleSearchTypeChange= (type:SearchType)=>{
    setSearchType(type);
    if(type === "pincode"){
      setPlaceHolder("e.g. 560038");
    }else{
      setPlaceHolder("e.g. Koramangala");
    }
  }

  return (
    <>
      <div className="bg-background h-screen text-text">
        <Navbar></Navbar>

        <section>
          <div className="py-10 text-center">
            <h1 className="text-4xl font-semibold mb-2  ">
              Banglore Pincode Explorer
            </h1>
            <p className="text-2xl font-thin">
              {" "}
              Search Banglore areas by pincode or find pincode by area name{" "}
            </p>
          </div>
        </section>

        <section className="w-full flex justify-center ">
          <div className="bg-card border border-border text-text w-[900px] p-4  rounded-lg flex  gap-8">
            <div className="  ">
              <h1 className="p-1">Search By</h1>
              <div  className="flex  bg-card border border-border  rounded-2xl p-1  w-full">
                <button
                onClick={()=>handleSearchTypeChange("pincode")}
                  className={`
     ${searchType==="pincode" ? "bg-primary text-white" : "bg-card text-muted"}
      px-5
      py-2
      hover:text-white
      rounded-xl `}
                >
                  Pincode
                </button>

                <button
                  onClick={()=>handleSearchTypeChange("area")}
                  className={`
      ${searchType==="area" ? "bg-primary text-white" : "bg-card text-muted"}   
      text-muted
      px-5
      py-2
      rounded-xl
      hover:text-white
      w-full
    `}
                >
                  Area Name
                </button>
              </div>
            </div>

            <div className="w-full">
              <p>Enter Pincode</p>
              <div className="flex gap-4 mt-2">
                <input
                  className="w-full focus:outline-none border border-gray-500  rounded-md px-2 py-2 "
                  placeholder={placeholder}
                  value={searchQuery}
                  onChange={(e)=>setSearchQuery(e.target.value)}
                ></input>
                <button onClick={async()=>{const res=await SearchQueryFun(searchType,searchQuery)
                    if(res.success){
                        setSearchResult([res.data])
                        setError(null)
                        console.log('serach result ' ,searchResult )
                    } else {    
                        setError(res.error)
                        setSearchResult([])
                    }
                }} className="flex gap-2 px-4 py-2 bg-primary text-text rounded-md">
                  <Search></Search>
                  Search
                </button>
              </div>
              <div>
                {error && <p className="text-red-500 mt-2">{error}</p>}
              </div>
            </div>
          </div>
        </section>

        <section className="flex  justify-center items-center ">
          <div>
            <div className="flex w-[900px] gap-2 my-4 ">
              <div className="bg-primary h-10 w-2"></div>
              <p className="text-2xl">Search Result</p>
            </div>
            {searchResult.length > 0 ? (
              searchResult.map((result:any, index) => (
                <SearchResultCard
                  key={index}
                  locationName={result.area}
                  pincode={result.pincode}
                />
              ))
            ) : (
              <p className="text-muted-foreground">
                No results found for the given search query.
              </p>
            )}
          </div>
        </section>
      </div>
    </>
  );
}
