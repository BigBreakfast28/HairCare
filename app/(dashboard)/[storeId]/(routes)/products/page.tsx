import prismadb from "@/lib/prismadb";

import { formatter } from "@/lib/utils"

import {format} from "date-fns"

const ProductsPage = async ({
    params 
}: {
    params: { storeId: string }
}) => {
    const products = await prismadb.product.findMany({
        where: {
            storeId: params.storeId
        },
        include: {
            category: true,
            size: true,
            color: true
        },
        orderBy: {
            createdAt: 'desc'
        }
    });

    const formattedProducts: productColumn[] = products.map((item) => ({
        id:         item.id,
        name:       item.name,
        isFeatured: item.isArchived,
        price:      formatter.format(item.price.toNumber()),
        categroy:   item.category.name,
        size:       item.category.name,
        color:      item.color.value,
        createdAt:  format(item.createdAt, "MMMM do, yyyy")
    }))


    return (
        <div className="flex-col">
            <div className="flex-1 space-y p-8 pt-6">
                <ProductClient data={formattedProducts}/>
            </div>
        </div>
    );
}

export default ProductsPage;