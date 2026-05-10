const backendurl="http://localhost:3000"
export async function SearchQueryFun(searchType:string,searchQuery:string){
   if (!searchQuery) {
    return "please enter a search query";
   }

   const endpoint= searchType === "pincode" ? `${backendurl}/pincode/${searchQuery}` : `${backendurl}/area/${searchQuery}`;

   try{
    const response = await fetch(endpoint);
    const data = await response.json();
    return data
return data
   }catch(error){
       console.error("Error fetching data:",error);
       return {success:false,errror:"An error occurred while fetching data"}    ;
   }

}