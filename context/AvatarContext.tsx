"use client"

import React, { createContext, useContext, useState, ReactNode } from "react";

interface AvatarContextType {
  selectedAvatar: string;
  changeAvatar: (imageUrl: string) => void;
  
}

const AvatarContext = createContext<AvatarContextType | undefined>(undefined);

export const AvatarProvider = ({ children }: { children: ReactNode }) => {
  const [selectedAvatar, setSelectedAvatar] = useState<string>(
    "/background.jpeg"
    );
    
    const changeAvatar = (imageUrl: string) => {
      setSelectedAvatar(imageUrl);
    };

  return (
    <AvatarContext.Provider value={{ selectedAvatar, changeAvatar }}>
      {children}
    </AvatarContext.Provider>
  );
};

export const useAvatar = () => {
  const context = useContext(AvatarContext);
  if (!context) {
    throw new Error("useAvatar must be used within an AvatarProvider");
  }
  return context;
};