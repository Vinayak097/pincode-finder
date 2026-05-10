import { Copy, LocateIcon } from "lucide-react"

export const SearchResultCard=({locationName, pincode}:{locationName: string, pincode: string})=>{
    return (
        <div className="w-[900px] " >
           <div className="flex justify-between text-xl items-center">
              <div className="flex gap-4 items-center ">
                <LocateIcon className="text-primary w-10 h-10"></LocateIcon>
                <p>{locationName}</p>
              </div>
              <div className="w-px bg-border self-stretch"></div>
              <div className= "  flex gap-4   ">
                <div>
                  <p>pincode</p>
                  <p>{pincode}</p>
                </div>
                <div className="flex justify-between">
                  <button className="text-primary flex items-center gap-2 px-4 py-2">
                    <Copy></Copy>
                    <p>Copy</p>
                  </button>
                </div>
              </div>
            </div>

        </div>
    )
}