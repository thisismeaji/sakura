"use client";

import { createContext, useContext, useState } from "react";

const SubscribeContext = createContext();

export function SubscribeProvider({ children }) {
  const [showSubscribe, setShowSubscribe] = useState(false);

  return (
    <SubscribeContext.Provider value={{ showSubscribe, setShowSubscribe }}>
      {children}
    </SubscribeContext.Provider>
  );
}

export function useSubscribe() {
  return useContext(SubscribeContext);
}
