import axios from 'axios';

axios.defaults.baseURL = 'https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/';

export const getCars = async (page = 1, limit = 4) => {
  try {
    const response = await axios.get('campers', {
      params: {
        page: page,  
        limit: limit, 
      },
    });
    return response.data; 
  } catch (error) {
    console.error("Error fetching cars:", error); 
    throw error; 
  }
};

export const getCarById = async (carsId) => {
  try {
    const urlById = `campers/${carsId}`; 
    const response = await axios.get(urlById);
    return response.data; 
  } catch (error) {
    console.error("Error fetching car by ID:", error); 
    throw error; 
  }
};