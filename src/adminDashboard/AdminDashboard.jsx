import { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Header from "../adminDashboard/Header";
import Sidebar from "../adminDashboard/Sidebar";
import Home from "../adminDashboard/Home";

const Products = () => <div>Products Page</div>;
const Categories = () => <div>Categories Page</div>;
const Customers = () => <div>Customers Page</div>;
const Inventory = () => <div>Inventory Page</div>;
const Reports = () => <div>Reports Page</div>;
const Settings = () => <div>Settings Page</div>;

function AdminDashboard() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);

  const handleSidebarToggle = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };

  return (
    <div className="dashboard">
      {/* Sidebar */}
      <Sidebar
        openSidebarToggle={openSidebarToggle}
        OpenSidebar={handleSidebarToggle}
      />

      {/* Main Content */}
      <div className={`content ${openSidebarToggle ? "content-shift" : ""}`}>
        <Header OpenSidebar={handleSidebarToggle} />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/inventory" element={<Inventory />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </div>
    </div>
  );
}

export default AdminDashboard;
