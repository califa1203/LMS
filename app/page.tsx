import { HeroSection } from '@/components/home/hero-section';
import { FullCourseGrid } from '@/components/courses/full-course-grid';
import { CourseGrid } from '@/components/courses/course-grid';
import { mockCourses } from '@/lib/mock-data';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <FullCourseGrid />
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Guided Learning
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Structured courses with expert instruction and comprehensive curriculum designed to take you from beginner to advanced
            </p>
          </div>
          <CourseGrid
            courses={mockCourses}
            title=""
            subtitle=""
          />
        </div>
      </section>
    </main>
  );
}