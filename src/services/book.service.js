import { Fetch } from "./baseUrl";

export const getBooks = async (url) => {
  try {
    return await Fetch.get(url);
  } catch (error) {
    throw new Error(error.messsage);
  }
};
