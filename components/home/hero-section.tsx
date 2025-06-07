'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, Play, Star, Users, BookOpen } from 'lucide-react';
import Link from 'next/link';

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-white to-purple-50 py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
          {/* Left Column - Content */}
          <div className="mb-12 lg:mb-0">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Transform Your
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  {' '}Learning Journey
                </span>
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 max-w-2xl">
                Access world-class education with our comprehensive learning management system. 
                Learn at your own pace with expert instructors and interactive content.
              </p>

              {/* Search Bar */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8 max-w-md mx-auto lg:mx-0">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <Input
                    type="text"
                    placeholder="Search courses..."
                    className="pl-10 py-3 text-lg"
                  />
                </div>
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 px-8">
                  Search
                </Button>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Link href="/auth/register">
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-700 px-8">
                    Get Started Free
                  </Button>
                </Link>
                <Button variant="outline" size="lg" className="px-8">
                  <Play className="mr-2 h-5 w-5" />
                  Watch Demo
                </Button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 text-center lg:text-left">
                <div>
                  <div className="flex items-center justify-center lg:justify-start mb-2">
                    <Users className="h-6 w-6 text-blue-600 mr-2" />
                    <span className="text-2xl font-bold text-gray-900">10K+</span>
                  </div>
                  <p className="text-gray-600">Active Students</p>
                </div>
                <div>
                  <div className="flex items-center justify-center lg:justify-start mb-2">
                    <BookOpen className="h-6 w-6 text-purple-600 mr-2" />
                    <span className="text-2xl font-bold text-gray-900">500+</span>
                  </div>
                  <p className="text-gray-600">Courses</p>
                </div>
                <div>
                  <div className="flex items-center justify-center lg:justify-start mb-2">
                    <Star className="h-6 w-6 text-yellow-500 mr-2" />
                    <span className="text-2xl font-bold text-gray-900">4.9</span>
                  </div>
                  <p className="text-gray-600">Average Rating</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Visual */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Students learning online"
                className="w-full h-96 lg:h-[500px] object-cover"
              />
              
              {/* Floating Cards */}
              <div className="absolute top-6 left-6 bg-white rounded-lg shadow-lg p-4 max-w-xs">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <BookOpen className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">New Course</p>
                    <p className="text-sm text-gray-600">Advanced Mathematics</p>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-6 right-6 bg-white rounded-lg shadow-lg p-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600 mb-1">98%</div>
                  <p className="text-sm text-gray-600">Success Rate</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}