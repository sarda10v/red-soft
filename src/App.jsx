import React, { Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import BrowsePage from "./pages/BrowsePage/BrowsePage";
import AuthPage from "./pages/AuthPage/AuthPage";
import { MainPageAsync } from "./pages/MainPage/MainPage.async";
import Skeleton from "./components/Skeleton/Skeleton";
import { useSelector } from "react-redux";

const App = () => {
  const token = useSelector((state) => state.application.token);

  return (
    <div className="page">
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<Skeleton />}>
              <MainPageAsync />
            </Suspense>
          }
        />
        <Route path="*" element={<Navigate to="/" replace />} />
        {token ? (
          <Route path="/browse" element={<BrowsePage />} />
        ) : (
          <Route path="/login" element={<AuthPage />} />
        )}
        {token && <Route path="/login" element={<Navigate to="/" replace />} />}
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
