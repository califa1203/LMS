export interface User {
  id: string;
  email: string;
  name: string;
  role: 'student' | 'teacher' | 'parent' | 'admin';
  avatar?: string;
  createdAt: string;
  profile?: {
    grade?: string;
    subject?: string;
    bio?: string;
    phone?: string;
  };
}

export interface Course {
  id: string;
  title: string;
  description: string;
  subject: string;
  instructor: string;
  instructorId: string;
  thumbnail: string;
  duration: string;
  level: 'beginner' | 'intermediate' | 'advanced';
  lessons: number;
  enrolled: number;
  rating: number;
  price?: number;
  tags: string[];
  createdAt: string;
}

export interface Lesson {
  id: string;
  courseId: string;
  title: string;
  description: string;
  videoUrl?: string;
  duration: string;
  materials: Material[];
  quiz?: Quiz;
  order: number;
}

export interface Material {
  id: string;
  title: string;
  type: 'pdf' | 'document' | 'link' | 'video';
  url: string;
}

export interface Quiz {
  id: string;
  title: string;
  questions: Question[];
  timeLimit?: number;
  passingScore: number;
}

export interface Question {
  id: string;
  type: 'multiple-choice' | 'true-false' | 'short-answer';
  question: string;
  options?: string[];
  correctAnswer: string | number;
  points: number;
}

export interface Progress {
  userId: string;
  courseId: string;
  lessonId: string;
  completed: boolean;
  score?: number;
  completedAt?: string;
}

export interface Message {
  id: string;
  from: string;
  to: string;
  subject: string;
  content: string;
  read: boolean;
  createdAt: string;
}

export interface Notification {
  id: string;
  userId: string;
  title: string;
  message: string;
  type: 'info' | 'success' | 'warning' | 'error';
  read: boolean;
  createdAt: string;
}