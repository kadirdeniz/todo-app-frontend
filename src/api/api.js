import axios from "axios";

// send post request to todo server
export const createTodo = async (baseUrl, todo) => {
  const response = await axios.post(`${baseUrl}/todo`, {
    text: todo,
  });
  return response.data;
};
