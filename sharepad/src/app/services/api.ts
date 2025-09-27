import axios from "axios"

export async function getCodeId(){
   try{
    const res = (await axios.post("/api/getCodeId")).data
    console.log(res)
    return res
   }
   catch(error){
    console.log(error)
    throw error
   }
}