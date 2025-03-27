export default function Shimmer() {
    return (
      <div className="flex flex-col gap-4 p-6 max-w-sm mx-auto bg-gray-900 rounded-lg animate-pulse">
        <div className="h-6 bg-gray-700 rounded w-3/4"></div>
        <div className="h-4 bg-gray-700 rounded w-1/2"></div>
        <div className="h-4 bg-gray-700 rounded w-full"></div>
        <div className="h-4 bg-gray-700 rounded w-5/6"></div>
        <div className="h-4 bg-gray-700 rounded w-3/4"></div>
      </div>
    );
  }
  