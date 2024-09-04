import { useEffect, useRef, useState } from "react";
import { MdOutlineShoppingCartCheckout } from "react-icons/md";
import { AnimatePresence, motion } from "framer-motion";
import { cx } from "../utils/cs";

function Fab() {
  const [showFab, setShowFab] = useState(true);
  const handleClick = () => {
    window.scrollTo({
      behavior: "smooth",
      top: window.document.body.offsetHeight,
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      const maxY = window.document.body.offsetHeight - window.innerHeight;
      if (window.scrollY > maxY - 300) {
        setShowFab(false);
      } else {
        setShowFab(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <AnimatePresence>
        {showFab && (
          <motion.button
            key={cx("fab-button")}
            initial={{ opacity: 0, translateY: 100, scale: 0 }}
            animate={{ opacity: 1, translateY: 0, scale: 1 }}
            exit={{ opacity: 0, translateY: 100, scale: 0 }}
            onClick={handleClick}
            className="md:hidden fixed bottom-4 right-4 p-4 bg-red rounded-full"
          >
            <MdOutlineShoppingCartCheckout className="text-white w-6 h-6" />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}

export default Fab;
