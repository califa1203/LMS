'use client';

import { DashboardLayout } from '@/components/dashboard/dashboard-layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Users,
  TrendingUp,
  Clock,
  Award,
  Calendar,
  MessageCircle,
  BookOpen,
  AlertCircle
} from 'lucide-react';

export default function ParentDashboard() {
  return (
    <DashboardLayout requiredRole="parent">
      <div className="p-6 space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Welcome back, Jennifer!</h1>
            <p className="text-gray-600">Monitor your children's progress</p>
          </div>
        </div>

        {/* Children Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              name: 'Emma Wilson',
              grade: '8th Grade',
              overall: 92,
              courses: 6,
              attendance: 96
            },
            {
              name: 'Jake Wilson',
              grade: '5th Grade',
              overall: 88,
              courses: 5,
              attendance: 94
            }
          ].map((child, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>{child.name}</span>
                  <Badge variant="secondary">{child.grade}</Badge>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-blue-600">{child.overall}%</div>
                    <div className="text-sm text-gray-600">Overall Grade</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-green-600">{child.courses}</div>
                    <div className="text-sm text-gray-600">Active Courses</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-purple-600">{child.attendance}%</div>
                    <div className="text-sm text-gray-600">Attendance</div>
                  </div>
                </div>
                <Button className="w-full" variant="outline">
                  View Detailed Progress
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Recent Activity */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <TrendingUp className="h-5 w-5" />
                  <span>Recent Activity</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  {
                    student: 'Emma Wilson',
                    activity: 'Completed Math Quiz',
                    score: '95%',
                    time: '2 hours ago',
                    type: 'success'
                  },
                  {
                    student: 'Jake Wilson',
                    activity: 'Submitted Science Project',
                    score: 'Pending Review',
                    time: '1 day ago',
                    type: 'pending'
                  },
                  {
                    student: 'Emma Wilson',
                    activity: 'Missed History Class',
                    score: 'Absent',
                    time: '2 days ago',
                    type: 'warning'
                  },
                  {
                    student: 'Jake Wilson',
                    activity: 'Received Grade for English Essay',
                    score: '88%',
                    time: '3 days ago',
                    type: 'success'
                  }
                ].map((item, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className={`p-2 rounded-lg ${
                        item.type === 'success' ? 'bg-green-100' :
                        item.type === 'warning' ? 'bg-yellow-100' : 'bg-blue-100'
                      }`}>
                        <TrendingUp className={`h-4 w-4 ${
                          item.type === 'success' ? 'text-green-600' :
                          item.type === 'warning' ? 'text-yellow-600' : 'text-blue-600'
                        }`} />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">{item.student}</p>
                        <p className="text-sm text-gray-600">{item.activity}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <Badge variant={item.type === 'success' ? 'default' : 
                                   item.type === 'warning' ? 'destructive' : 'secondary'}>
                        {item.score}
                      </Badge>
                      <p className="text-sm text-gray-500 mt-1">{item.time}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Sidebar Content */}
          <div className="space-y-6">
            {/* Alerts & Notifications */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <AlertCircle className="h-5 w-5" />
                  <span>Alerts</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="p-3 bg-yellow-50 rounded-lg border border-yellow-200">
                  <div className="flex items-start space-x-2">
                    <AlertCircle className="h-4 w-4 text-yellow-600 mt-0.5" />
                    <div>
                      <p className="font-medium text-yellow-800">Parent-Teacher Conference</p>
                      <p className="text-sm text-yellow-700">Scheduled for tomorrow at 3:00 PM</p>
                    </div>
                  </div>
                </div>
                <div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
                  <div className="flex items-start space-x-2">
                    <AlertCircle className="h-4 w-4 text-blue-600 mt-0.5" />
                    <div>
                      <p className="font-medium text-blue-800">Fee Payment Due</p>
                      <p className="text-sm text-blue-700">Monthly fee due in 3 days</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Upcoming Events */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Calendar className="h-5 w-5" />
                  <span>Upcoming</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="text-sm">
                  <p className="font-medium text-gray-900">Math Test - Emma</p>
                  <p className="text-gray-600">Tomorrow, 10:00 AM</p>
                </div>
                <div className="text-sm">
                  <p className="font-medium text-gray-900">Science Fair - Jake</p>
                  <p className="text-gray-600">Friday, 2:00 PM</p>
                </div>
                <div className="text-sm">
                  <p className="font-medium text-gray-900">Progress Report</p>
                  <p className="text-gray-600">Next Monday</p>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full justify-start" variant="outline">
                  <MessageCircle className="h-4 w-4 mr-2" />
                  Message Teachers
                </Button>
                <Button className="w-full justify-start" variant="outline">
                  <Calendar className="h-4 w-4 mr-2" />
                  View Schedule
                </Button>
                <Button className="w-full justify-start" variant="outline">
                  <BookOpen className="h-4 w-4 mr-2" />
                  Course Progress
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}