import Axios from "../index";

export const createAlbum = async (body) => {
  return Axios.post("/createAlbum", body);
};
