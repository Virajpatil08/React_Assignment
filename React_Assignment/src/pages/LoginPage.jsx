import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  FaEye,
  FaEyeSlash,
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaFacebook,
  FaTwitter,
  FaGlobe,
} from "react-icons/fa";
import CryptoJS from "crypto-js";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

const SECRET_KEY = "1234";

const validationSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  password: Yup.string()
    .min(8, "Must be at least 8 characters")
    .matches(/[A-Z]/, "Include an uppercase letter")
    .matches(/\d/, "Include a number")
    .matches(/[@#$%^&+=!]/, "Include a special character")
    .required("Password is required"),
});

export default function LoginPage() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-gray-900 to-gray-800 text-white px-4">
      <ToastContainer
        position="top-right"
        autoClose={2000}
        limit={1}
        hideProgressBar
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover
        theme="light"
        className="w-full sm:w-auto text-sm sm:text-base"
      />

      <div className="bg-gray-900 p-6 sm:p-8 rounded-lg shadow-2xl w-full max-w-md border border-gray-700">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-center mb-6">
          Login
        </h2>

        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={validationSchema}
          onSubmit={(values, { setSubmitting }) => {
            const encryptedPassword = CryptoJS.AES.encrypt(
              values.password,
              SECRET_KEY
            ).toString();

            localStorage.setItem(
              "user",
              JSON.stringify({
                email: values.email,
                password: encryptedPassword,
              })
            );

            toast.success("Login successful!", {
              className: "text-xs sm:text-base",
            });

            setTimeout(() => navigate("/dashboard"), 1000);
            setSubmitting(false);
          }}
        >
          {({ isSubmitting, errors, touched, setFieldTouched }) => (
            <Form className="space-y-4">
              <div>
                <label className="block text-sm sm:text-lg font-semibold">
                  Email
                </label>
                <Field
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  className="w-full p-2 sm:p-3 border border-gray-600 rounded-lg bg-gray-800 focus:ring-2 focus:ring-blue-500 focus:outline-none text-sm sm:text-base"
                  onBlur={() => setFieldTouched("email")}
                />
                {touched.email && errors.email && (
                  <p className="text-red-500 text-xs sm:text-sm mt-1">
                    {errors.email}
                  </p>
                )}
              </div>

              <div className="relative">
                <label className="block text-sm sm:text-lg font-semibold">
                  Password
                </label>
                <Field
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Enter your password"
                  className="w-full p-2 sm:p-3 border border-gray-600 rounded-lg bg-gray-800 pr-10 focus:ring-2 focus:ring-blue-500 focus:outline-none text-sm sm:text-base"
                  onBlur={() => setFieldTouched("password")}
                />
                <span
                  className="absolute right-3 sm:right-4 top-9 sm:top-10 text-gray-400 hover:text-gray-200 cursor-pointer"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <FaEyeSlash size={20} />
                  ) : (
                    <FaEye size={20} />
                  )}
                </span>
                {touched.password && errors.password && (
                  <p className="text-red-500 text-xs sm:text-sm mt-1">
                    {errors.password}
                  </p>
                )}
              </div>

              <button
                className="w-full bg-blue-600 p-2 sm:p-3 mt-4 rounded-lg text-sm sm:text-lg font-bold hover:bg-blue-700 transform transition-all duration-300 hover:scale-105 cursor-pointer"
                type="submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Logging in..." : "Login"}
              </button>
            </Form>
          )}
        </Formik>
        <p className="mt-4 text-gray-400 text-xs sm:text-sm text-center">
          Note: Use any email & password for testing.
        </p>
      </div>

      <footer className="mt-12 text-gray-400 text-xs sm:text-sm text-center ">
        <div className="flex space-x-4 justify-center">
          <a
            href="https://www.linkedin.com/in/viraj-patil-082b4618b/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={24} className="hover:text-blue-400" />
          </a>
          <a
            href="https://github.com/Virajpatil08"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={24} className="hover:text-gray-300" />
          </a>
          <a
            href="https://instagram.com/mr_viraj_1001_?igshid=1tbvh3yf9yy1o"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram size={24} className="hover:text-pink-400" />
          </a>
          <a
            href="https://www.facebook.com/vraj.patil.1612"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook size={24} className="hover:text-blue-500" />
          </a>
          <a
            href="https://twitter.com/vraj_patil_?s=09"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter size={24} className="hover:text-blue-400" />
          </a>
          <a
            href="https://virajpatil08.github.io/Viraj-Patil-Portfolio-/index.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGlobe size={24} className="hover:text-green-400" />
          </a>
        </div>

        <p className="mt-5">
          Contact: Viraj Patil |{" "}
          <a href="mailto:vrajpatil4444@gmail.com"> vrajpatil4444@gmail.com</a>
        </p>
      </footer>
    </div>
  );
}
