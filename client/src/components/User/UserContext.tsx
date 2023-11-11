import React, { createContext, useContext, useState, ReactNode } from 'react';

// User type definition
export type UserType = {
  // Define the properties of your user object here
  id: string;
  username: string;
  email: string;
  // ...other user properties
};

// Context type definition
type UserContextType = {
  user: UserType | null;
  setUser: (user: UserType | null) => void;
};

// Create context with the specified type
const UserContext = createContext<UserContextType | null>(null);

type UserProviderProps = {
  children: ReactNode; // ReactNode includes anything that React can render
};

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [user, setUser] = useState<UserType | null>(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};
