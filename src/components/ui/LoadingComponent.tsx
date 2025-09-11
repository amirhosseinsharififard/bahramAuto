'use client';

const LoadingComponent = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      <div className="text-center">
        {/* Animated spinning loader */}
        <div className="mx-auto mb-4 h-12 w-12 animate-spin rounded-full border-b-2 border-white"></div>
        <p className="text-white">Loading content...</p>
      </div>
    </div>
  );
};

export default LoadingComponent;
