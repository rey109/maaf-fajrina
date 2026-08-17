import { useState, useEffect } from "react";

export function useAuth() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  
  const signIn = async (...args: any[]) => {
    setIsLoading(true);
    // Simulate network delay
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        setIsAuthenticated(true);
        setIsLoading(false);
        resolve();
      }, 500);
    });
  };
  
  const signOut = async () => {
    setIsAuthenticated(false);
  };

  return {
    isLoading,
    isAuthenticated,
    user: isAuthenticated ? { name: "Guest User" } : null,
    signIn,
    signOut,
  };
}
