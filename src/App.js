import "./App.scss";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import WarehousePage from "./pages/WarehousePage/WarehousePage";
import WarehouseDetailsPage from "./pages/WarehouseDetailsPage/WarehouseDetailsPage";
import EditWarehousePage from "./pages/EditWarehousePage/EditWarehousePage";
import AddWarehousePage from "./pages/AddWarehousePage/AddWarehousePage";
import InventoryPage from "./pages//InventoryPage/InventoryPage";
import ItemDetailsPage from "./pages/ItemDetailsPage/ItemDetailsPage";
import EditItemPage from "./pages/EditItemPage/EditItemPage";

import AddItemPage from "./pages/AddItemPage/AddItemPage";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import { useEffect, useState } from "react";
import getWarehouses from "./utils/utils";

function App() {
  const [warehouses, setWarehouses] = useState([]);
  useEffect(() => {
    const fetchWarehouses = async () => {
      const data = await getWarehouses();
      setWarehouses(data);
    };
    fetchWarehouses();
  }, []);

  const renderWarehouses = (id) => {
    setWarehouses(warehouses.filter((element) => element.id !== id));
  };

  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Navigate to="/warehouse" />} />
        <Route
          path="/warehouse"
          element={
            <WarehousePage
              warehouses={warehouses}
              renderWarehouses={renderWarehouses}
            />
          }
        />
        <Route path="/warehouse/add" element={<AddWarehousePage />} />
        <Route
          path="/warehouse/:warehouseId"
          element={<WarehouseDetailsPage />}
        />
        <Route
          path="/warehouse/:warehouseId/edit"
          element={<EditWarehousePage />}
        />

        <Route path="/inventory" element={<InventoryPage />} />
        <Route path="inventory/add" element={<AddItemPage />} />
        <Route path="/inventory/:itemId" element={<ItemDetailsPage />} />
        <Route path="/inventory/:itemId/edit" element={<EditItemPage />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
