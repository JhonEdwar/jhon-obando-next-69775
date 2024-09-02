import { NextResponse } from "next/server";
import { collection, getDocs, query } from 'firebase/firestore'
import { db } from "@/firebase/config";




export async function GET(request:Request){
    const productosRef= collection(db, "productos")
    const q = query(productosRef)
    const querySnapshot=await getDocs(q)
    const docs=querySnapshot.docs.map(doc=>doc.data())
    return NextResponse.json(docs)

}