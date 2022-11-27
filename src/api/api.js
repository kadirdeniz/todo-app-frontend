import axios from "axios";

// send post request to todo server
export const createTodo = async (baseUrl) => {
  const response = await axios.post(`${baseUrl}/todo`, {
    text: "test",
  });
  return response.data;
};
