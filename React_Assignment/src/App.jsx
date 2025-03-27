import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Suspense, lazy, useState } from "react";
import CountdownLoader from "./components/CountdownLoader";
import Shimmer from "./components/Shimmer";

const LoginPage = lazy(() => import("./pages/LoginPage"));
const Dashboard = lazy(() => import("./pages/Dashboard"));

export default function App() {
  const [countdownFinished, setCountdownFinished] = useState(false);

  return (
    <Router>
      {countdownFinished ? (
        <Suspense fallback={<Shimmer />}>
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </Suspense>
      ) : (
        <CountdownLoader onFinish={() => setCountdownFinished(true)} />
      )}
    </Router>
  );
}
