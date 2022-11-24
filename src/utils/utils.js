import axios from "axios"

const getWarehouses = async () => {
    const url = "http://localhost:8080/warehouses"
    const { data } = await axios.get(url)
    return data
}
const getInventory = async () => {
    const url = "http://localhost:8080/inventories"
    const { data } = await axios.get(url)
    return data
}

export { getInventory }
export default getWarehouses
