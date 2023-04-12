import "./App.scss";
//Routing
import { BrowserRouter, Routes, Route } from "react-router-dom";
//pages
import { HomePage, ErrorPage, CategoryPage, MealPage } from "./pages/index";
//components
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Sidebar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/meal/:id" element={<MealPage />} />
        <Route path="/meal/category/:name" element={<CategoryPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
