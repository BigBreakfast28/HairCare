"use-client"
import toast from "react-hot-toast";

import { Billboard } from "@prisma/client";
import { BillboardColumn } from "./columns";
import { 
    DropdownMenu, 
    DropdownMenuContent, 
    DropdownMenuTrigger,
    DropdownMenuLabel,
    DropdownMenuItem
} from "@radix-ui/react-dropdown-menu";
import { Button } from "@/components/ui/button";
import { Edit, MoreHorizontal } from "lucide-react";


interface CellActionProps {
    data: BillboardColumn;
};

export const CellAction: React.FC<CellActionProps> = ({
    data
}) => {
    const onCopy = (description:string) => {
        navigator.clipboard.writeText(description);
        toast.success("API Route copied to the clipboard")
    };

        return (
        <DropdownMenu>
    <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="h-8 w-8 p-0">
            <span className="sr-only">Open Menu</span>
                <MoreHorizontal className="h-4 w-4"/>
        </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent align="end">
        <DropdownMenuLabel>
            Actions
        </DropdownMenuLabel>
        <DropdownMenuItem onClick={() => onCopy(data.id)}>
            <Edit className="mr-4 h-3 w-3" />
            Copy ID
        </DropdownMenuItem>
        <DropdownMenuItem>
            <Edit className="mr-2 h-3 w-3" />
            Update
        </DropdownMenuItem>
        <DropdownMenuItem>
            <Edit className="mr-2 h-3 w-3" />
            Delete
        </DropdownMenuItem>
    </DropdownMenuContent>
</DropdownMenu>
    );
};


