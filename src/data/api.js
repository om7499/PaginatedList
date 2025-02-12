// api.js
import axios from "axios";

 const baseURL = " https://dummyjson.com/users"

 
 export const fetchUserData = async () => {
  try {
    const response = await axios.get(baseURL);
    return response.data; // Returns the users list
  } catch (error) {
    console.error('Error fetching users:', error);
    throw error; // Ensures calling code handles the error
  }
};




