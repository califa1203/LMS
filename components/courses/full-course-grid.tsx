'use client';

import { Card, CardContent } from '@/components/ui/card';
import {
  Calculator,
  Atom,
  Users,
  Heart,
  PieChart,
  Beaker,
  Pi,
  ChartNoAxesCombined,
  BarChart3,
  Zap,
  Palette,
  Wallet,
  TrendingUp,
  Calendar,
  Globe,
  DollarSign,
  Shapes,
  Cog,
  Apple,
  Building,
  BookOpen,
  MessageSquare,
  MapPin,
  BookMarked,
  Diamond,
  Car,
  Target,
  Gamepad2,
  Home,
  Microscope,
  Wrench
} from 'lucide-react';

interface SubjectCategory {
  title: string;
  color: string;
  subjects: {
    name: string;
    icon: React.ComponentType<any>;
    iconColor: string;
  }[];
}

const subjectCategories: SubjectCategory[] = [
  {
    title: 'Mathematics',
    color: 'text-gray-900',
    subjects: [
      { name: 'Step-by-Step Solutions', icon: Calculator, iconColor: 'text-blue-500' },
      { name: 'Elementary Math', icon: PieChart, iconColor: 'text-blue-500' },
      { name: 'Algebra', icon: BarChart3, iconColor: 'text-blue-500' },
      { name: 'Plotting & Graphics', icon: TrendingUp, iconColor: 'text-blue-500' },
      { name: 'Calculus & Analysis', icon: Calculator, iconColor: 'text-blue-500' },
      { name: 'Geometry', icon: Shapes, iconColor: 'text-blue-500' },
      { name: 'Differential Equations', icon: Pi, iconColor: 'text-blue-500' },
      { name: 'Statistics', icon: ChartNoAxesCombined, iconColor: 'text-blue-500' }
    ]
  },
  {
    title: 'Science & Technology',
    color: 'text-gray-900',
    subjects: [
      { name: 'Units & Measures', icon: Target, iconColor: 'text-teal-500' },
      { name: 'Physics', icon: Atom, iconColor: 'text-green-500' },
      { name: 'Chemistry', icon: Beaker, iconColor: 'text-teal-600' },
      { name: 'Engineering', icon: Cog, iconColor: 'text-teal-500' },
      { name: 'Computational Sciences', icon: Zap, iconColor: 'text-green-600' },
      { name: 'Earth Sciences', icon: Globe, iconColor: 'text-teal-500' },
      { name: 'Materials', icon: Diamond, iconColor: 'text-teal-400' },
      { name: 'Transportation', icon: Car, iconColor: 'text-green-500' }
    ]
  },
  {
    title: 'Society & Culture',
    color: 'text-gray-900',
    subjects: [
      { name: 'People', icon: Users, iconColor: 'text-red-500' },
      { name: 'Arts & Media', icon: Palette, iconColor: 'text-red-500' },
      { name: 'Dates & Times', icon: Calendar, iconColor: 'text-red-500' },
      { name: 'Words & Linguistics', icon: MessageSquare, iconColor: 'text-red-600' },
      { name: 'Money & Finance', icon: DollarSign, iconColor: 'text-red-500' },
      { name: 'Food & Nutrition', icon: Apple, iconColor: 'text-red-500' },
      { name: 'Political Geography', icon: MapPin, iconColor: 'text-red-600' },
      { name: 'History', icon: BookMarked, iconColor: 'text-red-500' }
    ]
  },
  {
    title: 'Everyday Life',
    color: 'text-gray-900',
    subjects: [
      { name: 'Personal Health', icon: Heart, iconColor: 'text-blue-400' },
      { name: 'Personal Finance', icon: Wallet, iconColor: 'text-blue-500' },
      { name: 'Surprises', icon: Target, iconColor: 'text-blue-400' },
      { name: 'Entertainment', icon: Gamepad2, iconColor: 'text-blue-500' },
      { name: 'Household Science', icon: Home, iconColor: 'text-blue-400' },
      { name: 'Household Math', icon: Calculator, iconColor: 'text-blue-500' },
      { name: 'Hobbies', icon: Wrench, iconColor: 'text-blue-400' },
      { name: "Today's World", icon: Globe, iconColor: 'text-blue-500' }
    ]
  }
];

export function FullCourseGrid() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Explore All Subjects
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover comprehensive learning across all academic disciplines
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {subjectCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="space-y-4">
              <h3 className={`text-lg font-semibold ${category.color} mb-4`}>
                {category.title}
              </h3>
              <div className="space-y-3">
                {category.subjects.map((subject, subjectIndex) => {
                  const IconComponent = subject.icon;
                  return (
                    <Card 
                      key={subjectIndex} 
                      className="bg-white border border-gray-200 hover:border-gray-300 hover:shadow-md transition-all duration-200 cursor-pointer group"
                    >
                      <CardContent className="p-4">
                        <div className="flex items-center space-x-3">
                          <div className="flex-shrink-0">
                            <IconComponent className={`h-5 w-5 ${subject.iconColor}`} />
                          </div>
                          <span className="text-sm font-medium text-black group-hover:text-gray-700 transition-colors">
                            {subject.name}
                          </span>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}