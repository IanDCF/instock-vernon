import "./App.scss";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import WarehousesPage from "./pages/WarehousesPage/WarehousePage";
import WarehouseDetailsPage from "./pages/WarehouseDetailsPage/WarehouseDetailsPage";
import EditWarehousePage from "./pages/EditWarehousePage/EditWarehousePage";
import AddWarehousePage from "./pages/AddWarehousePage/AddWarehousePage";
import InventoryPage from "./pages/InventoryPage/InventoryPage";
import ItemDetailsPage from "./pages/ItemDetailsPage/ItemDetailsPage";
import EditItemPage from "./pages/EditItemPage/EditItemPage";
import AddItemPage from "./pages/AddItemPage/AddItemPage";
import { useEffect, useState } from "react";
import getWarehouses from "./utils/getWarehouses";

function App() {
  const [warehouses, setWarehouses] = useState([])
  useEffect(() => {
    const fetchWarehouses = async () => {
      const data = await getWarehouses()
      setWarehouses(data)
    }
    fetchWarehouses()
  }, [])
  return (
    <BrowserRouter>
      {/* Header Component */ }
      <Routes>
        <Route path="/" element={ <Navigate to="/warehouse" /> } />
        <Route
          path="/warehouse"
          element={ <WarehousesPage warehouses={ warehouses } /> }
        />
        <Route path="/warehouse/add" element={ <AddWarehousePage /> } />
        <Route
          path="/warehouse/:warehouseId"
          element={ <WarehouseDetailsPage /> }
        />
        <Route
          path="/warehouse/:warehouseId/edit"
          element={ <EditWarehousePage /> }
        />

        <Route path="/inventory" element={ <InventoryPage /> } />
        <Route path="inventory/add" element={ <AddItemPage /> } />
        <Route path="/inventory/:itemId" element={ <ItemDetailsPage /> } />
        <Route path="/inventory/:itemId/edit" element={ <EditItemPage /> } />
      </Routes>
      {/* Footer Component */ }
    </BrowserRouter>
  );
}

export default App;
