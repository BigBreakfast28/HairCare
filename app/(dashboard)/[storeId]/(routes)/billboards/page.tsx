import prismadb from "@/lib/prismadb";
import {BillboardClient} from "./components/client";
import { string } from "zod";

const BillboardsPage = async ({
    params 
}: {
    params: { storeId:string }
}) => {
    const billboard = await prismadb.billboard.findMany({
        where: {
            storeId: params.storeId
        },
        orderBy: {
            createdAt: 'desc'
        }
    });


    return (
        <div className="flex-col">
            <div className="flex-1 space-y p-8 pt-6">
                <BillboardClient data={billboard}/>
            </div>
        </div>
    );
}

export default BillboardsPage;