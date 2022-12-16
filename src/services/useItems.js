import axios from 'axios'

const BASE_URL = 'https://e-commerce-backend-production-ad56.up.railway.app/api/v1'




const getItems = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/item`)
            if (response.status === 200) {
                //console.log(response.data)
                itemsArray = response.data
                return itemsArray
             }
    } catch (error) {
      console.log('Ocurrio un Error: ', error.message)
    }
}

const getOneItem = async (id) => {
    try {
        const response = await axios.get(`${BASE_URL}/item + ${id}`);
            if (response.status === 200) {
                //console.log(response.data)
                itemsArray = response.data._id
                return itemsArray
             }
    } catch (error) {
      console.log('Ocurrio un Error: ', error.message)
    }
}


let itemsArray = [getItems()]

export {itemsArray}



/*export default function getAllItems() {

    const [items, setItems] = useState(null)

    useEffect(() =>{
        axios.get(`${BASE_URL}/item`).then((response) =>{
            setItems(response.data)
        }) 
    },[])

    if (!items) return null 

    return items

}*/

//const getAllItems = (data) => axios.get(`${BASE_URL}/item`,{data: {}}) 
// const getOneItem = (data) => axios.get(`${BASE_URL}/item`, data)

