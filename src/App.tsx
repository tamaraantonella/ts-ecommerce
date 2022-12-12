import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { ShoppingCartProvider } from "./context/ShopCartContext";
import { About } from "./pages/About";
import { Home } from "./pages/Home";
import { Store } from "./pages/Store";

function App() {
  return (
    <ShoppingCartProvider>
      <div className="max-w-5xl mx-auto">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<Store />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </ShoppingCartProvider>
  );
}

export default App;
