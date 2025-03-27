React Secure Login App
This is a React-based login application with secure password encryption using CryptoJS, smooth UI animations, and real-time form validation. It features Tailwind CSS for styling and React Toastify for notifications.

📂 Folder Structure
bash
Copy
Edit
/React_Assignment
│── /node_modules    # Installed dependencies
│── /public          # Static assets (index.html, icons, etc.)
│── /src
│   ├── /assets      # Images, icons, fonts, etc.
│   ├── /components  # Reusable UI components
│   │   ├── Countdown.jsx  # Countdown timer component
│   │   ├── Loader.jsx     # Loading spinner
│   │   ├── Shimmer.jsx    # Placeholder effect (Shimmer loading)
│   ├── /pages       # Main application pages
│   │   ├── Dashboard.jsx  # Dashboard page after login
│   │   ├── LoginPage.jsx  # Main login page
│   ├── App.css      # Global styles
│   ├── App.jsx      # Main React App component
│   ├── index.css    # Tailwind CSS styles
│   ├── main.jsx     # Entry point of React App
│── .gitignore       # Files to ignore in Git
│── eslint.config.cjs  # ESLint configuration
│── index.html       # Main HTML file
│── package-lock.json  # Dependency lock file
│── package.json     # Project dependencies & scripts
│── README.md        # Documentation
│── vite.config.js   # Vite configuration

| Library             | Purpose |
|--------------------|---------|
| **React** | Core frontend library |
| **React Router DOM** | For navigation between pages |
| **Tailwind CSS** | Styling framework |
| **CryptoJS** | Password encryption before storage |
| **React Icons** | Eye icon for password toggle |
| **React Toastify** | Notifications for success/errors |
| **Formik** | Form handling and validation |
| **Yup** | Schema-based validation with Formik |

⚡ Installation & Setup
1️⃣ Clone the Repository
bash
Copy
Edit
git clone https://github.com/Virajpatil08/React_Assignment.git
cd React_Assignment
2️⃣ Install Dependencies
bash
Copy
Edit
npm install
3️⃣ Start the Development Server
bash
Copy
Edit
npm run dev
The app should now be running at http://localhost:5173

📝 How to Use?
🔐 Login Process
Enter a valid email.

Type a strong password (8+ characters, uppercase, number, special character).

Click Login → Password is encrypted and stored in localStorage.

A success toast appears, and the user is redirected to the Dashboard and User Can Logout from dashboard and get back to Login Page 

🔍 Formik & Yup for Form Validation
Formik is used for efficient form handling and real-time validation.

Yup provides schema-based validation to enforce strict input rules.

Validation Rules:
✅ Email must be a valid format.
✅ Password must have at least 8 characters, including 1 uppercase letter, 1 number, and 1 special character.
✅ If any field is invalid, a toast error message appears.