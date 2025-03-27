import { ClipLoader } from "react-spinners";

export default function Loader() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-900">
      <ClipLoader size={50} color="#4A90E2" />
    </div>
  );
}
