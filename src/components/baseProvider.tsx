'use client'
import React, { useState } from "react";
import BaseContext from "@/utils/base-context";

const BaseProvider = ({ children }: { children: React.ReactNode }) => {
  const [baseNum, setBaseNum] = useState('2');

  return (
    <BaseContext.Provider value={{ baseNum, setBaseNum }}>
      {children}
    </BaseContext.Provider>
  );
};

export default BaseProvider;