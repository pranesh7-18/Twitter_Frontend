import axios from "axios";
import * as url from "../urls";

axios.defaults.withCredentials = true;

export const signup = (data) => {
  return axios
    .post(url.SIGN_UP, data, { withCredentials: true })
    .then((result) => {
      return result;
    })
    .catch((err) => {
      return err.response;
    });
};

export const signin = (data) => {
  return axios
    .post(url.SIGN_IN, data, { withCredentials: true })
    .then((result) => {
      return result;
    })
    .catch((err) => {
      return err.response;
    });
};

export const signout = () => {
  return axios
    .post(url.SIGN_OUT, {}, { withCredentials: true })
    .then((result) => {
      return result;
    })
    .catch((err) => {
      return err.response;
    });
};
