import axios from "axios";

const getWarehouses = async () => {
  const url = "http://localhost:8080/warehouses";
  const { data } = await axios.get(url);
  return data;
};

export const deleteWarehouse = async (warehouseId) => {
  const url = `http://localhost:8080/warehouses/${warehouseId}`;
  const { data } = await axios.delete(url, { data: { id: warehouseId } });
  return data;
};
export default getWarehouses;
