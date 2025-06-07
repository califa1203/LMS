import { User, Course, Message, Notification } from '@/types';

export const mockUsers: User[] = [
  {
    id: '1',
    email: 'admin@lms.com',
    name: 'Admin User',
    role: 'admin',
    avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
    createdAt: '2024-01-01T00:00:00Z',
    profile: {
      bio: 'System Administrator'
    }
  },
  {
    id: '2',
    email: 'teacher@lms.com',
    name: 'Sarah Johnson',
    role: 'teacher',
    avatar: 'https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=400',
    createdAt: '2024-01-01T00:00:00Z',
    profile: {
      subject: 'Mathematics',
      bio: 'Mathematics teacher with 10 years of experience'
    }
  },
  {
    id: '3',
    email: 'student@lms.com',
    name: 'Mike Chen',
    role: 'student',
    avatar: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=400',
    createdAt: '2024-01-01T00:00:00Z',
    profile: {
      grade: '10th Grade',
      bio: 'Enthusiastic learner interested in STEM subjects'
    }
  },
  {
    id: '4',
    email: 'parent@lms.com',
    name: 'Jennifer Wilson',
    role: 'parent',
    avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400',
    createdAt: '2024-01-01T00:00:00Z',
    profile: {
      bio: 'Parent of two students',
      phone: '+1 (555) 123-4567'
    }
  }
];

export const mockCourses: Course[] = [
  {
    id: '1',
    title: 'Advanced Mathematics',
    description: 'Comprehensive course covering algebra, calculus, and advanced mathematical concepts.',
    subject: 'Mathematics',
    instructor: 'Sarah Johnson',
    instructorId: '2',
    thumbnail: 'https://images.pexels.com/photos/6238029/pexels-photo-6238029.jpeg?auto=compress&cs=tinysrgb&w=600',
    duration: '12 weeks',
    level: 'advanced',
    lessons: 24,
    enrolled: 156,
    rating: 4.8,
    price: 199,
    tags: ['calculus', 'algebra', 'geometry'],
    createdAt: '2024-01-15T00:00:00Z'
  },
  {
    id: '2',
    title: 'Physics Fundamentals',
    description: 'Explore the fundamental principles of physics through interactive lessons and experiments.',
    subject: 'Physics',
    instructor: 'Dr. Robert Smith',
    instructorId: '5',
    thumbnail: 'https://images.pexels.com/photos/8617752/pexels-photo-8617752.jpeg?auto=compress&cs=tinysrgb&w=600',
    duration: '10 weeks',
    level: 'intermediate',
    lessons: 20,
    enrolled: 89,
    rating: 4.6,
    price: 149,
    tags: ['mechanics', 'thermodynamics', 'waves'],
    createdAt: '2024-01-10T00:00:00Z'
  },
  {
    id: '3',
    title: 'Introduction to Chemistry',
    description: 'Learn the basics of chemistry including atomic structure, chemical bonds, and reactions.',
    subject: 'Chemistry',
    instructor: 'Dr. Emily Davis',
    instructorId: '6',
    thumbnail: 'https://images.pexels.com/photos/2280549/pexels-photo-2280549.jpeg?auto=compress&cs=tinysrgb&w=600',
    duration: '8 weeks',
    level: 'beginner',
    lessons: 16,
    enrolled: 234,
    rating: 4.9,
    price: 99,
    tags: ['atoms', 'molecules', 'reactions'],
    createdAt: '2024-01-05T00:00:00Z'
  },
  {
    id: '4',
    title: 'World History',
    description: 'Journey through major historical events and civilizations that shaped our world.',
    subject: 'History',
    instructor: 'Prof. Michael Brown',
    instructorId: '7',
    thumbnail: 'https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=600',
    duration: '14 weeks',
    level: 'intermediate',
    lessons: 28,
    enrolled: 178,
    rating: 4.7,
    price: 179,
    tags: ['ancient', 'medieval', 'modern'],
    createdAt: '2024-01-20T00:00:00Z'
  },
  {
    id: '5',
    title: 'English Literature',
    description: 'Explore classic and contemporary literature with in-depth analysis and discussion.',
    subject: 'English',
    instructor: 'Ms. Lisa Anderson',
    instructorId: '8',
    thumbnail: 'https://images.pexels.com/photos/159581/dictionary-reference-book-learning-meaning-159581.jpeg?auto=compress&cs=tinysrgb&w=600',
    duration: '12 weeks',
    level: 'intermediate',
    lessons: 24,
    enrolled: 145,
    rating: 4.5,
    price: 129,
    tags: ['poetry', 'novels', 'drama'],
    createdAt: '2024-01-12T00:00:00Z'
  },
  {
    id: '6',
    title: 'Computer Science Basics',
    description: 'Learn programming fundamentals and computer science concepts for beginners.',
    subject: 'Computer Science',
    instructor: 'Alex Rivera',
    instructorId: '9',
    thumbnail: 'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=600',
    duration: '16 weeks',
    level: 'beginner',
    lessons: 32,
    enrolled: 312,
    rating: 4.8,
    price: 249,
    tags: ['programming', 'algorithms', 'data-structures'],
    createdAt: '2024-01-08T00:00:00Z'
  }
];

export const mockMessages: Message[] = [
  {
    id: '1',
    from: '2',
    to: '3',
    subject: 'Math Assignment Feedback',
    content: 'Great work on your latest assignment! Your approach to solving quadratic equations was excellent.',
    read: false,
    createdAt: '2024-01-25T10:30:00Z'
  },
  {
    id: '2',
    from: '3',
    to: '2',
    subject: 'Question about Physics Lab',
    content: 'Hi Ms. Johnson, I have a question about the upcoming physics lab experiment. Could we schedule a time to discuss?',
    read: true,
    createdAt: '2024-01-24T14:15:00Z'
  }
];

export const mockNotifications: Notification[] = [
  {
    id: '1',
    userId: '3',
    title: 'New Assignment Posted',
    message: 'A new math assignment has been posted in Advanced Mathematics',
    type: 'info',
    read: false,
    createdAt: '2024-01-25T09:00:00Z'
  },
  {
    id: '2',
    userId: '3',
    title: 'Quiz Reminder',
    message: 'Physics quiz is due tomorrow at 11:59 PM',
    type: 'warning',
    read: false,
    createdAt: '2024-01-24T16:00:00Z'
  }
];

export const subjects = [
  'Mathematics',
  'Physics',
  'Chemistry',
  'Biology',
  'History',
  'English',
  'Computer Science',
  'Art',
  'Music',
  'Physical Education',
  'Geography',
  'Economics'
];