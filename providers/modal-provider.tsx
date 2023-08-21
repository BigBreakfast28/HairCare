"use client";

/**local import */
import { StoreModal } from "@/components/modals/store-modal";

/**Global import */
import { useEffect, useState } from "react";

export const ModalProvider =() => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) {
        return null;
    }

    return (
        <>
            <StoreModal />
        </>
    );
};