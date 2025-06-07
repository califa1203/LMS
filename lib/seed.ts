import { PrismaClient, UserRole, CourseLevel, QuestionType } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

async function main() {
  console.log('🌱 Starting database seed...')

  // Hash password for demo users
  const hashedPassword = await bcrypt.hash('password123', 10)

  // Create demo users
  const adminUser = await prisma.user.upsert({
    where: { email: 'admin@lms.com' },
    update: {},
    create: {
      email: 'admin@lms.com',
      name: 'Admin User',
      password: hashedPassword,
      role: UserRole.ADMIN,
      avatar: '/avatars/admin.jpg'
    }
  })

  const teacherUser = await prisma.user.upsert({
    where: { email: 'teacher@lms.com' },
    update: {},
    create: {
      email: 'teacher@lms.com',
      name: 'John Smith',
      password: hashedPassword,
      role: UserRole.TEACHER,
      avatar: '/avatars/teacher.jpg'
    }
  })

  const studentUser = await prisma.user.upsert({
    where: { email: 'student@lms.com' },
    update: {},
    create: {
      email: 'student@lms.com',
      name: 'Jane Doe',
      password: hashedPassword,
      role: UserRole.STUDENT,
      avatar: '/avatars/student.jpg'
    }
  })

  const parentUser = await prisma.user.upsert({
    where: { email: 'parent@lms.com' },
    update: {},
    create: {
      email: 'parent@lms.com',
      name: 'Mary Johnson',
      password: hashedPassword,
      role: UserRole.PARENT,
      avatar: '/avatars/parent.jpg'
    }
  })

  console.log('✅ Demo users created')

  // Create parent-student relationship
  await prisma.parentStudentRelation.upsert({
    where: {
      parentId_studentId: {
        parentId: parentUser.id,
        studentId: studentUser.id
      }
    },
    update: {},
    create: {
      parentId: parentUser.id,
      studentId: studentUser.id,
      relationshipType: 'parent'
    }
  })

  console.log('✅ Parent-student relationship created')

  // Create sample courses
  const mathCourse = await prisma.course.create({
    data: {
      title: 'Advanced Mathematics',
      description: 'Comprehensive mathematics course covering algebra, calculus, and statistics.',
      thumbnail: '/course-thumbnails/math.jpg',
      level: CourseLevel.INTERMEDIATE,
      duration: 40,
      price: 99.99,
      isPublished: true,
      instructorId: teacherUser.id
    }
  })

  const scienceCourse = await prisma.course.create({
    data: {
      title: 'Physics Fundamentals',
      description: 'Introduction to physics principles and applications.',
      thumbnail: '/course-thumbnails/physics.jpg',
      level: CourseLevel.BEGINNER,
      duration: 30,
      price: 79.99,
      isPublished: true,
      instructorId: teacherUser.id
    }
  })

  const programmingCourse = await prisma.course.create({
    data: {
      title: 'Web Development',
      description: 'Learn modern web development with React and Next.js.',
      thumbnail: '/course-thumbnails/programming.jpg',
      level: CourseLevel.INTERMEDIATE,
      duration: 60,
      price: 149.99,
      isPublished: true,
      instructorId: teacherUser.id
    }
  })

  console.log('✅ Sample courses created')

  // Create lessons for math course
  const mathLesson1 = await prisma.lesson.create({
    data: {
      title: 'Introduction to Algebra',
      content: 'Basic algebraic concepts and operations.',
      videoUrl: 'https://www.youtube.com/watch?v=example1',
      orderIndex: 1,
      duration: 45,
      isPublished: true,
      courseId: mathCourse.id
    }
  })

  const mathLesson2 = await prisma.lesson.create({
    data: {
      title: 'Linear Equations',
      content: 'Solving linear equations and systems.',
      videoUrl: 'https://www.youtube.com/watch?v=example2',
      orderIndex: 2,
      duration: 50,
      isPublished: true,
      courseId: mathCourse.id
    }
  })

  console.log('✅ Sample lessons created')

  // Create a sample quiz
  const mathQuiz = await prisma.quiz.create({
    data: {
      title: 'Algebra Basics Quiz',
      description: 'Test your understanding of basic algebra concepts.',
      timeLimit: 30,
      passingScore: 70,
      maxAttempts: 3,
      isPublished: true,
      courseId: mathCourse.id,
      lessonId: mathLesson1.id
    }
  })

  // Create quiz questions
  await prisma.question.createMany({
    data: [
      {
        quizId: mathQuiz.id,
        questionText: 'What is the value of x in the equation 2x + 5 = 15?',
        questionType: QuestionType.MULTIPLE_CHOICE,
        options: JSON.stringify(['x = 5', 'x = 10', 'x = 7.5', 'x = 2.5']),
        correctAnswer: 'x = 5',
        points: 2,
        orderIndex: 1,
        explanation: 'Subtract 5 from both sides: 2x = 10, then divide by 2: x = 5'
      },
      {
        quizId: mathQuiz.id,
        questionText: 'Is the equation y = 2x + 3 a linear equation?',
        questionType: QuestionType.TRUE_FALSE,
        options: JSON.stringify(['True', 'False']),
        correctAnswer: 'True',
        points: 1,
        orderIndex: 2,
        explanation: 'Yes, it follows the form y = mx + b, which is a linear equation.'
      },
      {
        quizId: mathQuiz.id,
        questionText: 'Solve for y: 3y - 7 = 14',
        questionType: QuestionType.SHORT_ANSWER,
        options: undefined,
        correctAnswer: '7',
        points: 3,
        orderIndex: 3,
        explanation: 'Add 7 to both sides: 3y = 21, then divide by 3: y = 7'
      }
    ]
  })

  console.log('✅ Sample quiz and questions created')

  // Enroll student in courses
  await prisma.enrollment.createMany({
    data: [
      {
        studentId: studentUser.id,
        courseId: mathCourse.id,
        progressPercentage: 25,
        lastAccessedAt: new Date()
      },
      {
        studentId: studentUser.id,
        courseId: scienceCourse.id,
        progressPercentage: 10,
        lastAccessedAt: new Date()
      }
    ]
  })

  console.log('✅ Student enrollments created')

  // Create a sample quiz attempt
  await prisma.quizAttempt.create({
    data: {
      studentId: studentUser.id,
      quizId: mathQuiz.id,
      score: 5,
      maxScore: 6,
      answers: JSON.stringify({
        '1': 'x = 5',
        '2': 'True',
        '3': '7'
      }),
      completedAt: new Date(),
      timeTaken: 15,
      attemptNumber: 1
    }
  })

  console.log('✅ Sample quiz attempt created')

  // Create sample messages
  await prisma.message.createMany({
    data: [
      {
        senderId: studentUser.id,
        recipientId: teacherUser.id,
        subject: 'Question about Algebra',
        content: 'Hi Mr. Smith, I have a question about the linear equations lesson. Could you help me understand the concept better?',
        createdAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000) // 2 days ago
      },
      {
        senderId: teacherUser.id,
        recipientId: studentUser.id,
        subject: 'Re: Question about Algebra',
        content: 'Hi Jane, I\'d be happy to help! Linear equations are equations where the highest power of the variable is 1. Let\'s schedule a time to discuss this further.',
        readAt: new Date(),
        createdAt: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000) // 1 day ago
      },
      {
        senderId: parentUser.id,
        recipientId: teacherUser.id,
        subject: 'Jane\'s Progress',
        content: 'Hello Mr. Smith, I wanted to check on Jane\'s progress in your mathematics course. How is she doing?',
        createdAt: new Date(Date.now() - 3 * 60 * 60 * 1000) // 3 hours ago
      }
    ]
  })

  console.log('✅ Sample messages created')

  // Create sample notifications
  await prisma.notification.createMany({
    data: [
      {
        userId: studentUser.id,
        title: 'Quiz Graded',
        message: 'Your Algebra Basics Quiz has been graded. You scored 5/6!',
        type: 'QUIZ_GRADED',
        createdAt: new Date(Date.now() - 1 * 60 * 60 * 1000) // 1 hour ago
      },
      {
        userId: studentUser.id,
        title: 'New Message',
        message: 'You have a new message from John Smith',
        type: 'NEW_MESSAGE',
        createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000) // 2 hours ago
      },
      {
        userId: teacherUser.id,
        title: 'New Message',
        message: 'You have a new message from Mary Johnson',
        type: 'NEW_MESSAGE',
        createdAt: new Date(Date.now() - 3 * 60 * 60 * 1000) // 3 hours ago
      }
    ]
  })

  console.log('✅ Sample notifications created')

  // Create sample blog posts
  await prisma.blogPost.createMany({
    data: [
      {
        title: 'Welcome to Our Learning Management System',
        content: 'We are excited to announce the launch of our new LMS platform. This system will help students, teachers, and parents stay connected and track academic progress.',
        excerpt: 'Announcing the launch of our new LMS platform for better learning management.',
        thumbnail: '/blog-thumbnails/welcome.jpg',
        isPublished: true,
        publishedAt: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000) // 1 week ago
      },
      {
        title: 'Tips for Effective Online Learning',
        content: 'Online learning requires different strategies than traditional classroom learning. Here are some tips to help you succeed in your online courses.',
        excerpt: 'Discover effective strategies for successful online learning.',
        thumbnail: '/blog-thumbnails/tips.jpg',
        isPublished: true,
        publishedAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000) // 3 days ago
      }
    ]
  })

  console.log('✅ Sample blog posts created')

  // Create site settings
  await prisma.siteSetting.createMany({
    data: [
      {
        key: 'site_name',
        value: 'EduLearn LMS',
        type: 'string'
      },
      {
        key: 'site_description',
        value: 'A comprehensive learning management system for modern education',
        type: 'string'
      },
      {
        key: 'hero_title',
        value: 'Learn Anytime, Anywhere',
        type: 'string'
      },
      {
        key: 'hero_subtitle',
        value: 'Join our comprehensive learning platform and unlock your potential',
        type: 'string'
      },
      {
        key: 'enable_registrations',
        value: 'true',
        type: 'boolean'
      }
    ]
  })

  console.log('✅ Site settings created')

  console.log('🎉 Database seeding completed successfully!')
}

main()
  .catch((e) => {
    console.error('❌ Error during seeding:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
