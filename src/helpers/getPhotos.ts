import axios from "axios";
import { toast } from "react-toastify";

export const searchPhotos = async (word: string) => {
  try {
    const { data } = await axios.get(`https://api.pexels.com/v1/search?query=${word}&per_page=9`, {
      headers: {
        Authorization: `${ import.meta.env.VITE_PEXELS_API_KEY }`
      }
    });
    return data;
  } catch (err) {
    if (err.response.status === 404) {
      toast.error("Photos of word not found :(");
    }
  }
}