import axios from "axios";
import { loginData } from "./../../interface/LoginData";
export async function GetReqest(url: string, options: string): Promise<any> {
  var axios = require("axios");
  var config = {
    method: `Get`,
    url: url,
    headers: {
      Authorization: `Bearer ${options}`,
    },
  };
  try {
    const response = await axios(config);
    return response;
  } catch (err: any) {
    return err.response;
  }
}

export const LoginPostReqiest = async (url: string, Data: loginData) => {
  try {
    const response = await axios.post(url, Data);
    let answer = {
      status: response.status,
      data: response.data,
    };
    return answer;
  } catch (err: any) {
    console.log(err.response.status, `Eror`);
    let answer = {
      status: err.response.status,
      data: err.response.data,
    };
    return answer;
  }
};
export const GetReqestNoAutg = async (url: string) => {
  try {
    const response = await axios.get(url);
    let answer = {
      status: response.status,
      data: response.data,
    };

    return answer;
  } catch (err: any) {
    console.log(err.response.status, `Eror`);
    let response = {
      status: err.response.status,
      data: err.response.data,
    };
    return response;
  }
};
export async function ChangeDataUser(
  url: string,
  options: string,
  data: any
){
  var axios = require("axios");
  var config = {
    method: `Put`,
    url: url,
    headers: {
      Authorization: `Bearer ${options}`,
    },
    data: data,
  };
  try {
    const response = await axios(config);
    console.log(response.status);
  } catch (err: any) {
    console.log(err.status);
  }
}
