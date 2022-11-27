import axios from "axios";

// send post request to todo server
export const createTodo = async (baseUrl, todo) => {
  const response = await axios.post(`${baseUrl}/todos`, {
    text: todo,
  });
  return response.data;
};
