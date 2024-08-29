import { NextResponse } from "next/server";
import { games } from '@/data/products'
import { revalidateTag } from "next/cache";

const sleep= (timer:number)=>{
    return new Promise ((resolve)=>{setTimeout(resolve,timer)})
}

export async function GET(){
    await sleep(1000)
    revalidateTag('productos')
    return NextResponse.json(games)
}