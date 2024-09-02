import { NextResponse } from "next/server";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/firebase/config";


export async function GET({params}){
    const {id} =params
    const docRef=doc(db, "productos", id)
    const docSnapshot=await getDoc(docRef)
    return NextResponse.json(docSnapshot.data())

}