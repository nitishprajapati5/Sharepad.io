import { PrismaClient } from "@/generated/prisma";
import { v4 as uuidv4 } from 'uuid';
import axios from "axios"
import { FileCode } from "../types/FileCode";
const prisma = new PrismaClient()

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