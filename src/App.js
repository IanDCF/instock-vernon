import "./App.scss";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import WarehousesPage from "../WarehousesPage/WarehousesPage";
import WarehouseDetailsPage from "../WarehouseDetailsPage/WarehouseDetailsPage";
import EditWarehousePage from "../EditWarehousePage/EditWarehousePage";
import AddWarehousePage from "../AddWarehousePage/AddWarehousePage";
import InventoryPage from "../InventoryPage/InventoryPage";
import ItemDetailsPage from "../ItemDetailsPage/ItemDetailsPage";
import EditItemPage from "../EditItemPage/EditItemPage";
import AddItemPage from "../AddItemPage/AddItemPage";

function App() {
  return (
    <BrowserRouter>
      {/* Header Component */}
      <Routes>
        <Route path="/" element={<Navigate to="/warehouse" />} />
        <Route path="/warehouse" element={<WarehousesPage />} />
        <Route path="/warehouse/add" element={<AddWarehousePage />} />
        <Route
          path="/warehouse/:warehouseId"
          element={<WarehouseDetailsPage />}
        />
        <Route
          path="/warehouse/:warehouseId/edit"
          element={<EditWarehousePage />}
        />

        <Route
          path="/warehouse/:warehouseId/inventory"
          element={<InventoryPage />}
        />
        <Route
          path="/warehouse/:warehouseId/inventory/add"
          element={<AddItemPage />}
        />
        <Route
          path="/warehouse/:warehouseId/inventory/:itemId"
          element={<ItemDetailsPage />}
        />
        <Route
          path="/warehouse/:warehouseId/inventory/:itemId/edit"
          element={<EditItemPage />}
        />
      </Routes>
      {/* Footer Component */}
    </BrowserRouter>
  );
}

export default App;
