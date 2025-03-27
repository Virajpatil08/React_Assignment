import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Dashboard() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (!storedUser) {
      navigate("/");
    } else {
      setUser(JSON.parse(storedUser));
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("user");
    toast.success("Logout successful!", { className: "text-xs sm:text-base" });
    setTimeout(() => navigate("/"), 1000);
  };

  if (!user) return null;

  return (
    <div className="h-screen flex flex-col bg-gray-800 text-white">
      <ToastContainer
        position="top-right"
        autoClose={2000}
        limit={1}
        hideProgressBar
        newestOnTop
        closeOnClick
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover
        theme="light"
        className="w-full sm:w-auto text-sm sm:text-base"
      />

      <header className="p-4 bg-gray-900 flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0 border-b border-gray-700">
        <h1 className="text-lg sm:text-xl font-extrabold text-center sm:text-left">
          Dashboard
        </h1>

        <div className="flex items-center gap-3 sm:gap-4">
          <span className="text-xs sm:text-base break-words text-center">
            {user.email}
          </span>

          <img
            src="https://via.placeholder.com/40"
            alt="Profile"
            className="w-10 h-10 rounded-full border border-blue-600"
          />

          <button
            className="bg-red-500 px-3 sm:px-4 py-2 rounded text-xs sm:text-base font-semibold hover:bg-red-600 transition-transform transform hover:scale-105"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      </header>

      <main className="flex-1 flex items-center justify-center px-4 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold leading-tight">
          Welcome to the Dashboard, <br className="sm:hidden" /> {user.email}!
        </h2>
      </main>
    </div>
  );
}
