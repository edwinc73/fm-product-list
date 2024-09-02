import "./App.scss";
import Cart from "./components/Cart/Cart";
import Menu from "./components/Menu/Menu";

function App() {
  return (
    <>
      <main className="min-w-screen min-h-screen bg-rose-50">
        <Menu />
        <Cart />
      </main>
    </>
  );
}

export default App;
