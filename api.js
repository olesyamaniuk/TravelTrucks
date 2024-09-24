import axios from 'axios';

// export const getCars = async (page = 1, limit = 4) => {
//   const url = `https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers?page=${page}&limit=${limit}`;
//   const response = await axios.get(url);
//   return response.data;
// }

axios.defaults.baseURL = 'https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/';
export const getCars = async (page = 1, limit = 4) => {
  const response = await axios.get('campers', {
    params: {
      page: page,
      limit: limit,
    },
  });
  return response.data; // Залежно від формату відповіді API, може знадобитися уточнення
};


export const getAllCars = async () => {
  try {
    const response = await axios.get('campers'); // Отримуємо всі автомобілі без пагінації
    return response.data; // Можливо, тут також знадобиться перевірка формату відповіді
  } catch (error) {
    console.error("Error fetching all cars", error);
    throw error;
  }
};
export const getFilteredCars = async (filters, location, page = 1, limit = 4) => {
  try {
    const params = {
      page,
      limit,
      ...filters.equipment.reduce((acc, filter) => {
        if (filter.active) acc[filter.label.toLowerCase()] = true;
        return acc;
      }, {}),
      type: filters.type.filter((filter) => filter.active).map((filter) => filterMapping[filter.label]),
      location: location.toLowerCase(),
    };

    const response = await axios.get('campers', { params });
    return response.data;
  } catch (error) {
    console.error("Error fetching filtered cars", error);
    throw error;
  }
};

export const getCarById = async (carsId) => {
  const urlById = `https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers/${carsId}`;
  const response = await axios.get(urlById);
    return response.data;
}