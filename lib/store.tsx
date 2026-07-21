'use client';
import React, { createContext, useContext, useState, useEffect } from 'react';
import { ORGANIZATIONS } from './constants';

export type User = {
  id: string;
  firstName: string;
  lastName: string;
  nationalId: string;
  phone: string;
  membershipCode: string;
  city: string;
  organizationId: string;
  avatar: string;
  level: string;
  points: number;
  walletBalance: number;
};

type AppContextType = {
  user: User | null;
  login: (phone: string, membershipCode: string) => void;
  logout: () => void;
  org: typeof ORGANIZATIONS['default'];
};

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem('app_user');
    if (stored) {
      setUser(JSON.parse(stored));
    }
    setIsLoaded(true);
  }, []);

  const login = (phone: string, membershipCode: string) => {
    let orgId = 'default';
    if (membershipCode.startsWith('1')) orgId = 'oil';
    if (membershipCode.startsWith('2')) orgId = 'education';

    const newUser: User = {
      id: '1',
      firstName: 'علی',
      lastName: 'محمدی',
      nationalId: '0012345678',
      phone,
      membershipCode,
      city: 'تهران',
      organizationId: orgId,
      avatar: 'https://picsum.photos/seed/avatar/150/150',
      level: 'طلایی',
      points: 1250,
      walletBalance: 5000000,
    };
    setUser(newUser);
    localStorage.setItem('app_user', JSON.stringify(newUser));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('app_user');
  };

  const org = user ? (ORGANIZATIONS as any)[user.organizationId] || ORGANIZATIONS.default : ORGANIZATIONS.default;

  return (
    <AppContext.Provider value={{ user, login, logout, org }}>
      {children}
    </AppContext.Provider>
  );
}

export const useAppStore = () => {
  const context = useContext(AppContext);
  if (!context) throw new Error('useAppStore must be used within AppProvider');
  return context;
};
