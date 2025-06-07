'use client';

import { User } from '@/types';
import { mockUsers } from './mock-data';

// Simple auth context for demo purposes
// In production, this would integrate with a proper auth service
export class AuthService {
  private static instance: AuthService;
  private currentUser: User | null = null;

  static getInstance(): AuthService {
    if (!AuthService.instance) {
      AuthService.instance = new AuthService();
    }
    return AuthService.instance;
  }

  login(email: string, password: string): Promise<User | null> {
    return new Promise((resolve) => {
      // Simulate API call
      setTimeout(() => {
        const user = mockUsers.find(u => u.email === email);
        if (user) {
          this.currentUser = user;
          localStorage.setItem('currentUser', JSON.stringify(user));
          resolve(user);
        } else {
          resolve(null);
        }
      }, 1000);
    });
  }

  register(userData: Partial<User>): Promise<User | null> {
    return new Promise((resolve) => {
      setTimeout(() => {
        const newUser: User = {
          id: Math.random().toString(36).substr(2, 9),
          email: userData.email!,
          name: userData.name!,
          role: userData.role || 'student',
          createdAt: new Date().toISOString(),
          profile: userData.profile
        };
        
        mockUsers.push(newUser);
        this.currentUser = newUser;
        localStorage.setItem('currentUser', JSON.stringify(newUser));
        resolve(newUser);
      }, 1000);
    });
  }

  logout(): void {
    this.currentUser = null;
    localStorage.removeItem('currentUser');
  }

  getCurrentUser(): User | null {
    if (!this.currentUser) {
      const stored = localStorage.getItem('currentUser');
      if (stored) {
        this.currentUser = JSON.parse(stored);
      }
    }
    return this.currentUser;
  }

  isAuthenticated(): boolean {
    return this.getCurrentUser() !== null;
  }

  hasRole(role: string): boolean {
    const user = this.getCurrentUser();
    return user?.role === role;
  }
}

export const authService = AuthService.getInstance();