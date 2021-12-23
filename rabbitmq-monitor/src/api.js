import axios from "axios"
import { PASSWORD, USERNAME } from "./Auth"
import { API_URL } from "./URL";

export const getAPI = async (url, ...config) => {
  try {
    const { data } = await axios.get(API_URL + url, {
      auth: {
        username: USERNAME,
        password: PASSWORD
      },
      ...config
    });
    return data;
  } catch (e) {
    console.error(e)
  }
}

export const postAPI = async (url, dataBody, ...config) => {
  try {
    const { data } = await axios.post(API_URL + url, dataBody, {
      auth: {
        username: USERNAME,
        password: PASSWORD
      },
      ...config
    });
    return data;
  } catch (e) {
    return e;
  }
}

export const putAPI = async (url, dataBody, ...config) => {
  try {
    const { data } = await axios.put(API_URL + url, dataBody, {
      auth: {
        username: USERNAME,
        password: PASSWORD
      },
      ...config
    });
    return data;
  } catch (e) {
    console.error(e);
  }
}

export const deleteAPI = async (url, ...config) => {
  try {
    const { data } = await axios.delete(API_URL + url, {
      auth: {
        username: USERNAME,
        password: PASSWORD
      },
      ...config,
    });
    return data;
  } catch (e) {
    console.error(e);
  }
}