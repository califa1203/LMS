'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  BookOpen,
  Users,
  BarChart3,
  Settings,
  MessageCircle,
  Calendar,
  FileText,
  GraduationCap,
  UserCheck,
  PlusCircle,
  Award,
  Bell,
  Home,
  ChevronLeft
} from 'lucide-react';
import { useState } from 'react';

interface MenuItem {
  title: string;
  href: string;
  icon: any;
  badge?: string;
}

interface SidebarProps {
  role: 'student' | 'teacher' | 'parent' | 'admin';
}

export function Sidebar({ role }: SidebarProps) {
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState(false);

  const getMenuItems = (role: string): MenuItem[] => {
    const baseItems: MenuItem[] = [
      {
        title: 'Dashboard',
        href: `/${role}`,
        icon: Home
      }
    ];

    switch (role) {
      case 'student':
        return [
          ...baseItems,
          {
            title: 'My Courses',
            href: '/student/courses',
            icon: BookOpen,
            badge: '3'
          },
          {
            title: 'Assignments',
            href: '/student/assignments',
            icon: FileText,
            badge: '2'
          },
          {
            title: 'Grades',
            href: '/student/grades',
            icon: Award
          },
          {
            title: 'Schedule',
            href: '/student/schedule',
            icon: Calendar
          },
          {
            title: 'Messages',
            href: '/student/messages',
            icon: MessageCircle,
            badge: '5'
          }
        ];

      case 'teacher':
        return [
          ...baseItems,
          {
            title: 'My Courses',
            href: '/teacher/courses',
            icon: BookOpen
          },
          {
            title: 'Students',
            href: '/teacher/students',
            icon: Users
          },
          {
            title: 'Assignments',
            href: '/teacher/assignments',
            icon: FileText
          },
          {
            title: 'Grading',
            href: '/teacher/grading',
            icon: UserCheck,
            badge: '12'
          },
          {
            title: 'Create Content',
            href: '/teacher/create',
            icon: PlusCircle
          },
          {
            title: 'Messages',
            href: '/teacher/messages',
            icon: MessageCircle,
            badge: '8'
          }
        ];

      case 'parent':
        return [
          ...baseItems,
          {
            title: 'Children Progress',
            href: '/parent/progress',
            icon: BarChart3
          },
          {
            title: 'Courses',
            href: '/parent/courses',
            icon: BookOpen
          },
          {
            title: 'Attendance',
            href: '/parent/attendance',
            icon: UserCheck
          },
          {
            title: 'Messages',
            href: '/parent/messages',
            icon: MessageCircle,
            badge: '3'
          },
          {
            title: 'Schedule',
            href: '/parent/schedule',
            icon: Calendar
          }
        ];

      case 'admin':
        return [
          ...baseItems,
          {
            title: 'User Management',
            href: '/admin/users',
            icon: Users
          },
          {
            title: 'Course Management',
            href: '/admin/courses',
            icon: BookOpen
          },
          {
            title: 'Analytics',
            href: '/admin/analytics',
            icon: BarChart3
          },
          {
            title: 'Content Management',
            href: '/admin/content',
            icon: FileText
          },
          {
            title: 'Notifications',
            href: '/admin/notifications',
            icon: Bell
          },
          {
            title: 'System Settings',
            href: '/admin/settings',
            icon: Settings
          }
        ];

      default:
        return baseItems;
    }
  };

  const menuItems = getMenuItems(role);

  return (
    <div className={cn(
      'bg-white border-r border-gray-200 transition-all duration-300',
      collapsed ? 'w-16' : 'w-64'
    )}>
      <div className="flex items-center justify-between p-4 border-b border-gray-200">
        {!collapsed && (
          <Link href="/\" className="flex items-center space-x-2">
            <GraduationCap className="h-8 w-8 text-blue-600" />
            <span className="text-xl font-bold text-gray-900">EduLMS</span>
          </Link>
        )}
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setCollapsed(!collapsed)}
          className="p-2"
        >
          <ChevronLeft className={cn(
            'h-4 w-4 transition-transform',
            collapsed && 'rotate-180'
          )} />
        </Button>
      </div>

      <nav className="p-4 space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;

          return (
            <Link key={item.href} href={item.href}>
              <Button
                variant={isActive ? 'secondary' : 'ghost'}
                className={cn(
                  'w-full justify-start',
                  collapsed && 'px-2',
                  isActive && 'bg-blue-50 text-blue-700 hover:bg-blue-100'
                )}
              >
                <Icon className={cn('h-5 w-5', !collapsed && 'mr-3')} />
                {!collapsed && (
                  <>
                    <span className="flex-1 text-left">{item.title}</span>
                    {item.badge && (
                      <Badge variant="secondary" className="ml-auto">
                        {item.badge}
                      </Badge>
                    )}
                  </>
                )}
              </Button>
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
