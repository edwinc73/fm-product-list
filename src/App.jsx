import { useContext } from "react";
import "./App.scss";
import Cart from "./components/Cart/Cart";
import Menu from "./components/Menu/Menu";
import ConfirmOrder from "./components/modal/ConfirmOrder";
import { CartContext } from "./context/CartContext";
import { AnimatePresence, motion } from "framer-motion";
import Fab from "./component/Fab";

function App() {
  const { confirmOrder } = useContext(CartContext);
  return (
    <>
      <main className="min-w-screen min-h-screen bg-Rose-50 relative md:max-w-7xl md:mx-auto md:mt-6 md:flex">
        <Menu />
        <Cart />
        <AnimatePresence>
          {confirmOrder && (
            <motion.div
              key="confirm modal"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <ConfirmOrder />
            </motion.div>
          )}
        </AnimatePresence>
        <Fab />
      </main>
    </>
  );
}

export default App;
