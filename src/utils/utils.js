import axios from "axios"

const getWarehouses = async () => {
  const url = "http://localhost:8080/warehouses"
  const { data } = await axios.get(url)
  return data
}
export const getInventory = async () => {
  const url = "http://localhost:8080/inventories"
  const { data } = await axios.get(url)
  return data
}

export const deleteWarehouse = async (warehouseId) => {
  const url = `http://localhost:8080/warehouses/${warehouseId}`;
  const { data } = await axios.delete(url, { data: { id: warehouseId } });
  return data;
};

export const deleteItem = async (itemId) => {
  const url = `http://localhost:8080/inventories/${itemId}`;
  const { data } = await axios.delete(url, { data: { id: itemId } });
  return data;
};

export const getInventoryItem = async (itemId) => {
  const url = `http://localhost:8080/inventories/${itemId}`;
  const { data } = await axios.get(url);
  return data;

}

export default getWarehouses;
