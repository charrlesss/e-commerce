import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Home from "../features/pages/Home";
import Product from "../features/pages/Product";

export default function Routers() {
  const location = useLocation();

  return (
    <AnimatePresence initial={false}>
      <Routes key={location.pathname} location={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<Product />} />
      </Routes>
    </AnimatePresence>
  );
}
