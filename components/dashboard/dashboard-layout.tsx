'use client';

import { ReactNode, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Sidebar } from './sidebar';
import { authService } from '@/lib/auth';
import { User } from '@/types';
import { LoadingSpinner } from '@/components/ui/loading-spinner';

interface DashboardLayoutProps {
  children: ReactNode;
  requiredRole?: 'student' | 'teacher' | 'parent' | 'admin';
}

export function DashboardLayout({ children, requiredRole }: DashboardLayoutProps) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const currentUser = authService.getCurrentUser();
    
    if (!currentUser) {
      router.push('/auth/login');
      return;
    }

    if (requiredRole && currentUser.role !== requiredRole) {
      // Redirect to appropriate dashboard
      const dashboardPath = currentUser.role === 'admin' ? '/admin' :
                           currentUser.role === 'teacher' ? '/teacher' :
                           currentUser.role === 'parent' ? '/parent' : '/student';
      router.push(dashboardPath);
      return;
    }

    setUser(currentUser);
    setLoading(false);
  }, [requiredRole, router]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <LoadingSpinner size="lg" />
      </div>
    );
  }

  if (!user) {
    return null;
  }

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar role={user.role} />
      <main className="flex-1 overflow-y-auto">
        {children}
      </main>
    </div>
  );
}