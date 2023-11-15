import prismadb from "@/lib/prismadb";

import {BillboardClient} from "./components/client";
import { BillboardColumn } from "./components/columns";

import {format} from "date-fns"

const CategoriesPage = async ({
    params 
}: {
    params: { storeId: string }
}) => {
    const categories = await prismadb.category.findMany({
        where: {
            storeId: params.storeId
        },
        include: {
            billboard: true
        },
        orderBy: {
            createdAt: 'desc'
        }
    });

    const formattedCategories: BillboardColumn[] = categories.map((item) => ({
        id: item.id,
        name: item.name,
        billboardLabel: item.billboard.label,
        createdAt: format(item.createdAt, "MMMM do, yyyy")
    }))


    return (
        <div className="flex-col">
            <div className="flex-1 space-y p-8 pt-6">
                <BillboardClient data={formattedCategories}/>
            </div>
        </div>
    );
}

export default CategoriesPage;