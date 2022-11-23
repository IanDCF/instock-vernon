import axios from "axios"

const getWarehouses = async () => {
    const url = "http://localhost:8080/warehouses"
    const { data } = await axios.get(url)
    return data
}

export default getWarehouses