export default function CoursesPage() {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Courses</h1>
      <p className="text-gray-700 mb-6">Explore our wide range of courses designed to help you learn and grow.</p>
      {/* Course list or grid will go here */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Example course card */}
        <div className="bg-white shadow-md rounded-lg p-4">
          <h2 className="text-xl font-semibold mb-2">Course Title</h2>
          <p className="text-gray-600 mb-4">Short description of the course.</p>
          <a href="/courses/course-id" className="text-blue-600 hover:underline">View Course</a>
        </div>
      </div>
    </div>
  );
}
// This is a placeholder for the course list. You can replace it with your actual course data and components.
// You can also add pagination, filters, or search functionality as needed.
// For now, this page will display a simple message and a sample course card.
// You can expand this with more complex logic as your application grows.