import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

const FooterButton: React.FC = () => {
  const [showButton, setShowButton] = useState<boolean>(false);

  // Show button when user scrolls down
  useEffect(() => {
    const handleScroll = (): void => {
      if (window.scrollY > 200) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to top function
  const scrollToTop = (): void => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#0d1221] text-white py-10 relative">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {/* Footer Content Here */}
      </div>

      {/* Back to Top Button */}
      {showButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-28 right-3 bg-red-300 text-white p-3 rounded-full shadow-md hover:bg-red-600 transition-all"
        >
          <FaArrowUp size={20} />
        </button>
      )}
    </footer>
  );
};

export default FooterButton;
