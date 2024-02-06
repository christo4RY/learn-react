import { Fetch } from "./baseUrl";

export const auth = async (url) => {
  try {
    return Fetch.get(url);
  } catch (error) {
    throw new Error(error.message);
  }
};
