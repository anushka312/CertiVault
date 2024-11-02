import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
  Link,
} from "react-router-dom";
import Navbar from "./components/navbar.jsx";
import LeftBar from "./components/leftbar.jsx";
import Sign from "./components/sign.jsx"; // Import your Sign component
import CategoryPage from "./components/CategoryPage.jsx";
import Home from "./components/Home.jsx";
import FetchDocuments from "./components/FetchDocuments.jsx";

const App = () => {
  const location = useLocation();
  // console.log(location);

  return (
    <div className="bg-sky-100 min-h-screen">
      {/* Conditionally render the Navbar and LeftBar */}

      {location.pathname !== "/signup" && <Navbar />}

      <div className="flex">
        <div></div>
        {location.pathname !== "/signup" && <LeftBar />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup/*" element={<Sign />} />{" "}
          {/* Use Sign component for all signup routes */}
          <Route path="/category" element={<CategoryPage />} />
          <Route path="/fetch" element={<FetchDocuments />} />
        </Routes>
      </div>
    </div>
  );
};

// Wrap App with Router
const AppWrapper = () => (
  <Router>
    <App />
  </Router>
);

export default AppWrapper;
