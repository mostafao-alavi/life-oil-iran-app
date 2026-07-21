'use client';
import { createContext, useContext } from 'react';
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

export type AppContextType = {
  user: User | null;
  login: (phone: string, membershipCode: string) => void;
  logout: () => void;
  org: typeof ORGANIZATIONS['default'];
};

export const AppContext = createContext<AppContextType | undefined>(undefined);

export const useAppStore = () => {
  const context = useContext(AppContext);
  if (!context) throw new Error('useAppStore must be used within AppProvider');
  return context;
};
