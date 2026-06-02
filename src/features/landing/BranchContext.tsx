"use client";

import { createContext, useContext, useState, ReactNode } from "react";

export type BranchId = "currency_nagar" | "bhavanipuram";

type BranchContextType = {
  selectedBranch: BranchId;
  setSelectedBranch: (branch: BranchId) => void;
};

const BranchContext = createContext<BranchContextType>({
  selectedBranch: "currency_nagar",
  setSelectedBranch: () => {},
});

export function useBranch() {
  return useContext(BranchContext);
}

export function BranchProvider({ children }: { children: ReactNode }) {
  const [selectedBranch, setSelectedBranch] = useState<BranchId>("currency_nagar");

  return (
    <BranchContext.Provider value={{ selectedBranch, setSelectedBranch }}>
      {children}
    </BranchContext.Provider>
  );
}
