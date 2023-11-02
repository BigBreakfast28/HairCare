import prismadb from "@/lib/prismadb";

import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";
import { string } from "zod";

export async function POST (
    req: Request,
    {params }: {params: {storeId: string}}
)
{
    try{
        const {userId} = auth();
        const body = await req.json();

        const {label, imageUrl} = body;

        if (!userId) {
            return new NextResponse("Unauthorized", {status:401})
        }

        if (!label) {
            return new NextResponse("Label is required", {status:400})
        }

        if (!imageUrl) {
            return new NextResponse("Image is required", {status:400})
        }

        const billboard = await prismadb.billboard.create({
            data: {
                label,
                imageUrl,
                storeId: params.storeId
            
                
            }
        });

        if (!params.storeId) {
            return new NextResponse("Store is required", {status:400})
        }

        const storeByUserId = await prismadb.store.findFirst ({
            where : {
                id: params.storeId,
                userId
            }
        });

        if (!storeByUserId) {
            return new NextResponse("Unauthorized", {status:403})
        }
        
    return NextResponse.json(billboard);
    } catch (error) {
        console.log('[BILLBOARDS_POST]', error);
        return new NextResponse("Interal error", {status:500});
    }    
}