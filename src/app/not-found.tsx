import Link from "next/link";
import Header from "@/components/Header";
import MainLayout from "@/components/MainLayout";

export default function NotFound() {
  return (
    <MainLayout>
      <Header />
      
      <div className="text-center py-16">
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <h2 className="text-2xl font-semibold mb-6">Page Not Found</h2>
        <p className="text-gray-600 mb-8 max-w-md mx-auto">
          Sorry, the page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <Link 
          href="/" 
          className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          Go to Homepage
        </Link>
      </div>
    </MainLayout>
  );
}
