import { MapPin } from "lucide-react";

export function Navbar(){
    return (
        <div className="bg-card border-b border-border px-5 py-5 bold text-text text-align flex  gap-5 items-center">
            <MapPin className="text-primary size-[40px]" />
            <h3 className="text-2xl font-semibold">
                Banglore Pincode Finder
            </h3> 

        </div>
    )
}