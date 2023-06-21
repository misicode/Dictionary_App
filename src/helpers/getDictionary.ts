import axios from "axios";
import { toast } from "react-toastify";

export const searchDictionary = async (word: string) => {
  try {
    const { data } = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
    return data[0];
  } catch (err) {
    if (err.response.status === 404) {
      toast.error("Word not found :(");
    }
  }
}