import commonAPI from "./commonAPI";
import SERVERURL from "./serverURL";

export const saveVideoAPI = async (videoDetails) => {
  return await commonAPI("POST", `${SERVERURL}/uploadVideos`, videoDetails);
};

export const getAllVideosAPI = async () => {
  return await commonAPI("GET", `${SERVERURL}/uploadVideos`, "");
};

export const saveHistoryAPI = async (historyDetails) => {
  return await commonAPI("POST", `${SERVERURL}/history`, historyDetails);
};

export const getAllHistoryAPI = async () => {
  return await commonAPI("GET", `${SERVERURL}/history`, "");
};

export const deleteHistoryAPI = async (id) => {
  return await commonAPI("DELETE", `${SERVERURL}/history/${id}`, {});
};

export const deleteVideoAPI = async (id) => {
  return await commonAPI("DELETE", `${SERVERURL}/uploadVideos/${id}`, {});
};

export const saveCategoryAPI = async (categoryDetails) => {
  return await commonAPI("POST", `${SERVERURL}/categories`, categoryDetails);
};

export const getAllCategoryAPI = async () => {
  return await commonAPI("GET", `${SERVERURL}/categories`, {});
};

export const deleteCategoryAPI = async (id) => {
  return await commonAPI("DELETE", `${SERVERURL}/categories/${id}`, {});
};

export const updateCategoryAPI = async (categoryDetails)=>{
  return await commonAPI("PUT", `${SERVERURL}/categories/${categoryDetails.id}`,categoryDetails)
}