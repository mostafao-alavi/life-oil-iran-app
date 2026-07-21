'use client';
import type { ReactNode } from 'react';
import { useState, useEffect } from 'react';
import { AppContext, User } from '@/lib/store-context';
import { ORGANIZATIONS } from '@/lib/constants';

export function AppProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const init = () => {
      const stored = localStorage.getItem('app_user');
      if (stored) {
        setUser(JSON.parse(stored));
      }
      setIsLoaded(true);
    };
    init();
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
      {isLoaded ? children : null}
    </AppContext.Provider>
  );
}
