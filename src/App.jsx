import { useState, useEffect } from "react";
import { Nav } from "./components/Nav";
import Body from "./components/Body";
import BackToTop from "./components/BackToTop";
import SkipToContent from "./components/SkipToContent";
import ThemeToggle from "./components/ThemeToggle";
import Loading from "./components/Loading";
import Footer from "./components/Footer";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time for better perceived performance
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div data-theme="dark" className="w-full h-full min-h-screen">
      <SkipToContent />
      {/* <ThemeToggle /> */}
      <Nav />
      <main id="main-content" tabIndex="-1">
        <Body />
      </main>
      <BackToTop />
      <Footer />
    </div>
  );
}

export default App;