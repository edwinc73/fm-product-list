import { useState } from "react";
import { PropagateLoader } from "react-spinners";

export const CtaButton = ({ setConfirmOrder, children, type }) => {
  // type can be cart or confirm
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = () => {
    if (type == "confirm") {
      setConfirmOrder(false);
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } else if (type == "cart") {
      setIsLoading(true);
      wait(setIsLoading, setConfirmOrder);
    }
  };
  return (
    <button
      className="w-full bg-red text-white font-medium flex justify-center items-center px-6 py-3 rounded-full border border-rose-950 border-opacity-50 h-12"
      onClick={handleClick}
    >
      {isLoading ? (
        <PropagateLoader color="#ffffff" size={8} />
      ) : (
        <>{children}</>
      )}
    </button>
  );
};

const wait = async (func, func2) => {
  const timeout = Math.random() * 2000;
  await setTimeout(() => {
    func(false);
    func2(true);
  }, timeout);
};
