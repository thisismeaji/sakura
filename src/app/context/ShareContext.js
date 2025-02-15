"use client";

import { createContext, useContext, useState } from "react";

const ShareContext = createContext();

export function ShareProvider({ children }) {
  const [showShare, setShowShare] = useState(false);

  return (
    <ShareContext.Provider value={{ showShare, setShowShare }}>
      {children}
    </ShareContext.Provider>
  );
}

export function useShare() {
  return useContext(ShareContext);
}
