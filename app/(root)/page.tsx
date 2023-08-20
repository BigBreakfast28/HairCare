"use client";

import { Modal } from "@/components/ui/modal";
import { Children } from "react";

const SetupPage =() => {
    return (
    <div className="p-4">
       <Modal  title="test" description="Test Desc."isOpen onClose={() => {}} >
        Children
       </Modal>
    </div>
    )
  }
  
export default SetupPage;