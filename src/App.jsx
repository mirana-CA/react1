import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import Basket from "./components/basket";
import Wishlist from "./components/wishlist";
import Layout from "./components/layout";
import NoPage from "./components/nopage";
import Admin from "./adminpanel/admin";
import AdminAdd from "./adminpanel/adminadd";
import { HelmetProvider } from "react-helmet-async";
import BasketProvider from "./context/basketContext";
function App() {
  return (
    <>
    <BasketProvider>
      <HelmetProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="basket" element={<Basket />} />
              <Route path="wishlist" element={<Wishlist />} />
              <Route path="admin" element={<Admin />} />
              <Route path="adminadd" element={<AdminAdd />} />
              <Route path="*" element={<NoPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </HelmetProvider>
      </BasketProvider>
    </>
  );
}

export default App;
